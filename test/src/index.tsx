/**
 * js-org-validator
 * Copyright (C) 2021 Marvin Schopf
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * @license AGPL-3.0-or-later
 * @copyright 2021 Marvin Schopf
 * @author Marvin Schopf <marvin@schopf.biz>
 *
 */

import isURL from "validator/lib/isURL";
import { resolve } from "path";
import { getCNAMEs, getCNAMEsFile, Cname } from "./cnames";
import fs from "fs";

import fetch from "node-fetch";

import React, { Fragment, ReactNode } from "react";
import { render, Text, Box } from "ink";
import Spinner from "ink-spinner";
import prettier from "prettier";

import { identify } from "./providers";

async function asyncForEach(array: any, callback: Function) {
	for (let index: number = 0; index < array.length; index++) {
		await callback(array[index], index, array);
	}
}

async function getKeyProperties(cnames: Cname[]): Promise<string[]> {
	let keys: string[] = [];
	await asyncForEach(cnames, (cname: Cname) => {
		keys.push(cname.key);
	});
	return keys;
}

function error(message: string, exit?: boolean) {
	console.log(`❌ ${message}`);
	if (exit) process.exit(1);
}

type Props = {};

type Message = { type: "error" | "warning"; message: string; line?: number };

type State = {
	status: string;
	messages: Message[];
	errors: string[];
	warnings: string[];
	success: boolean;
	errorCount: number;
	warningCount: number;
	summary: ReactNode;
	done: boolean;
	providersMap: { provider: string; count: number }[];
	noCF: number;
};

type Provider = {
	provider: string;
	count: number;
};

type Annotation = {
	file: string;
	line: number;
	title: string;
	message: string;
	annotation_level: "notice" | "warning" | "failure";
};

class App extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			status: "Starting...",
			messages: [],
			success: false,
			summary: <Box></Box>,
			errorCount: 0,
			warningCount: 0,
			done: false,
			providersMap: [],
			noCF: 0,
			errors: [],
			warnings: [],
		};
	}
	error(message: string, exitAfter = true) {
		let messages: Message[] = this.state.messages;
		messages.push({
			type: "error",
			message: message,
		});
		let errors: string[] = this.state.errors;
		errors.push(message);
		this.setState({
			messages: messages,
			errorCount: this.state.errorCount + 1,
			errors: errors,
		});
		if (exitAfter) this.end(1);
	}

	setStatus(message: string) {
		this.setState({
			status: message,
		});
	}

	getEmoji(emoji: string): string {
		if (!process.env.CI) {
			return emoji;
		}
		return "";
	}

	end(withCode = 0) {
		let providers: ReactNode[] = [];
		let totalElements: number = 0;
		this.state.providersMap.forEach((provider: Provider, index: number) => {
			totalElements = totalElements + provider.count;
		});
		let providersMap: Provider[] = this.state.providersMap;
		providersMap = this.state.providersMap.sort((a, b): number => {
			if (a.count > b.count) return -1;
			if (a.count < b.count) return 1;
			return 0;
		});
		let othersCount: number = 0;
		providersMap.forEach((provider) => {
			if (
				provider.provider !== "Others" &&
				provider.provider !== "Other"
			) {
				providers.push(
					<Box key={`provider-${provider.provider}`}>
						<Text color="whiteBright" bold>
							{provider.provider}:{" "}
						</Text>
						<Text color="whiteBright">
							{((provider.count / totalElements) * 100).toFixed(
								2
							)}
							% <Text color="gray">({provider.count})</Text>
						</Text>
					</Box>
				);
			} else {
				othersCount = provider.count;
			}
		});
		if (process.env.CI) {
			this.setStatus("Creating annotations...");
			let annotations: Annotation[] = [];
			let warningsString: string = "";
			let errorsString: string = "";
			this.state.messages.forEach((message: Message) => {
				annotations.push({
					file: "cnames_active.js",
					line: message.line ? message.line : 1,
					title: message.type,
					annotation_level:
						message.type === "error" ? "failure" : "warning",
					message: message.message,
				});
				if (message.type === "error") {
					errorsString =
						errorsString +
						`- ${message.message.replaceAll("'", "`")}\n`;
				}
				if (message.type === "warning") {
					warningsString =
						warningsString +
						`- ${message.message.replaceAll("'", "`")}\n`;
				}
			});
			if (warningsString === "")
				warningsString = "No warnings have occurred.";
			if (errorsString === "") errorsString = "No errors have occurred.";
			fs.writeFileSync(
				resolve(process.cwd(), "annotations.json"),
				JSON.stringify(annotations)
			);
			["pull request", "commit"].map((commentType: string) => {
				fs.writeFileSync(
					resolve(
						process.cwd(),
						`${commentType.replaceAll(" ", "_")}_comment.md`
					),
					`
**Hello! 👋**${"  "}
The validation of your ${commentType} has been completed. ✅${"  "}

### Status
${
	this.state.errors.length === 0 ? "🎉 **Success!**" : "❌ **Failure!**"
} Done with **${this.state.errors.length} error${
						this.state.errors.length === 0 ||
						this.state.errors.length >= 2
							? "s"
							: ""
					}** and **${this.state.warnings.length} warning${
						this.state.warnings.length === 0 ||
						this.state.warnings.length >= 2
							? "s"
							: ""
					}**.

### Details
<details>
		<summary>${this.state.errors.length} error${
						this.state.errors.length === 0 ||
						this.state.errors.length >= 2
							? "s"
							: ""
					}</summary>
	<br />

${errorsString}
</details>
<details>
	<summary>${this.state.warnings.length} warning${
						this.state.warnings.length === 0 ||
						this.state.warnings.length >= 2
							? "s"
							: ""
					}</summary>
	<br />

${warningsString}
</details>
<details>
	<summary>Statistics</summary>
	<br />
${
	this.state.errors.length >= 1
		? "As errors occurred, no statistics were calculated."
		: ""
}
${
	this.state.errors.length === 0
		? "#### Services  \n\n| Provider | Share |\n| ------------- | -----:|\n" +
		  providersMap
				.map((provider) => {
					return `| **${provider.provider}** | **${(
						(provider.count / totalElements) *
						100
					).toFixed(2)}%** (${provider.count}) |\n`;
				})
				.join("")
		: ""
}
${
	this.state.errors.length === 0
		? `
#### Cloudflare${"  "}

| Status               | Rate |
|----------------------|------|
| **Sites using Cloudflare**     | **${(
				((totalElements - this.state.noCF) / totalElements) *
				100
		  ).toFixed(2)}%** (${totalElements - this.state.noCF})  |
| **Sites not using Cloudflare** | **${(
				(this.state.noCF / totalElements) *
				100
		  ).toFixed(2)}%**  (${this.state.noCF}) |
`
		: ""
}
</details>
`
				);
			});
			this.setStatus("Done.");
		}
		this.setState({
			summary: (
				<Fragment>
					<Box>
						<Text> </Text>
					</Box>
					{this.state.errors.length === 0 && (
						<Fragment>
							<Box>
								<Text color="magenta" bold>
									Breakdown of services used:
								</Text>
							</Box>
							{providers}
							<Box>
								<Text color="gray">
									----------------------------
								</Text>
							</Box>
							<Box>
								<Text color="whiteBright" bold>
									Others:{" "}
								</Text>
								<Text color="whiteBright">
									{(
										(othersCount / totalElements) *
										100
									).toFixed(2)}
									% <Text color="gray">({othersCount})</Text>
								</Text>
							</Box>
							<Box>
								<Text color="whiteBright" bold>
									Total:{" "}
								</Text>
								<Text color="whiteBright">{totalElements}</Text>
							</Box>
							<Box>
								<Text> </Text>
							</Box>
							<Box>
								<Text color="magenta" bold>
									Cloudflare statistics:
								</Text>
							</Box>
							<Box>
								<Text color="whiteBright" bold>
									Sites using Cloudflare:{" "}
								</Text>
								<Text color="whiteBright">
									{(
										((totalElements - this.state.noCF) /
											totalElements) *
										100
									).toFixed(2)}
									%{" "}
									<Text color="gray">
										({totalElements - this.state.noCF})
									</Text>
								</Text>
							</Box>
							<Box>
								<Text color="whiteBright" bold>
									Sites not using Cloudflare:{" "}
								</Text>
								<Text color="whiteBright">
									{(
										(this.state.noCF / totalElements) *
										100
									).toFixed(2)}
									%{" "}
									<Text color="gray">
										({this.state.noCF})
									</Text>
								</Text>
							</Box>
							<Box>
								<Text> </Text>
							</Box>
						</Fragment>
					)}
					{this.state.errors.length >= 1 && (
						<Fragment>
							<Box>
								<Text> </Text>
							</Box>
							<Box>
								<Text color="red" bold>
									Not showing statistics because errors have
									occurred.
								</Text>
							</Box>
							<Box>
								<Text> </Text>
							</Box>
						</Fragment>
					)}
					<Box>
						<Text color="gray">
							{withCode === 0 ? (
								<Text color="green" bold>
									{this.getEmoji("🎉") + " "}Success!{" "}
								</Text>
							) : (
								<Text color="red" bold>
									{this.getEmoji("😞") + " "}Failure!{" "}
								</Text>
							)}
							Done with{" "}
							<Text color="red">
								{this.state.errorCount} error
								{this.state.errorCount === 0 ||
								this.state.errorCount >= 2
									? "s"
									: ""}{" "}
							</Text>
							and{" "}
							<Text color="yellow">
								{this.state.warningCount} warning
								{this.state.warningCount === 0 ||
								this.state.warningCount >= 2
									? "s"
									: ""}
							</Text>
							.
						</Text>
					</Box>
				</Fragment>
			),
			status: "Done.",
			done: true,
		});
		process.exit(withCode);
	}

	async componentDidMount() {
		try {
			await fs.promises.access(
				resolve(process.cwd(), "cnames_active.js")
			);
		} catch (e) {
			this.error("The file 'cnames_active.js' does not exist.", true);
		}
		try {
			prettier.check(
				await fs.promises.readFile(
					resolve(process.cwd(), "cnames_active.js"),
					"utf-8"
				),
				{
					parser: "babel",
				}
			);
		} catch (e) {
			this.error("File 'cnames_active.js' has an invalid syntax.", true);
		}
		this.setStatus("Parsing...");
		let cnames: Cname[] = [];
		try {
			cnames = await getCNAMEs(await getCNAMEsFile());
		} catch (e) {
			this.error(
				"An error occured while parsing 'cnames_active.js'.",
				true
			);
		}
		let failSorting: boolean = false;
		const sortedItems: string[] = (await getKeyProperties(cnames)).sort();
		await asyncForEach(cnames, (cname: Cname, index: number) => {
			this.setStatus(`Validating '${cname.key}'...`);
			if (!isURL(`${cname.key}${cname.key === "" ? "" : "."}js.org`)) {
				if (
					!cname.key.startsWith("_") &&
					!cname.key.endsWith("_") &&
					cname.key.includes("_")
				) {
					// ph
				} else {
					this.error(
						`CNAME would not be a valid URL: '${cname.key}' => '${
							cname.key
						}${cname.key === "" ? "" : "."}js.org'`,
						true
					);
				}
			}
			if (!isURL(cname.target)) {
				this.error(
					`CNAME target is not a valid url: '${cname.key}' => '${cname.target}'`,
					true
				);
			}
		});
		await asyncForEach(
			sortedItems,
			async (element: string, index: number) => {
				if (element !== (await getKeyProperties(cnames))[index]) {
					const correctPosition: number = sortedItems.indexOf(
						element
					);
					const itemBefore: string | false = sortedItems[
						correctPosition - 1
					]
						? sortedItems[correctPosition - 1]
						: false;
					const itemNext: string | false = sortedItems[
						correctPosition + 1
					]
						? sortedItems[correctPosition + 1]
						: false;
					const recommendation =
						itemBefore && itemNext
							? `Item should follow '${itemBefore}' and precede '${itemNext}'.`
							: itemBefore
							? `Item should follow '${itemBefore}'.`
							: itemNext
							? `Item should precede '${itemNext}'.`
							: "";
					this.error(
						`Wrong sorting: '${element}'. ${recommendation}`,
						true
					);
					failSorting = true;
				}
			}
		);
		if (failSorting) this.end(1);
		await asyncForEach(cnames, async (cname: Cname, index: number) => {
			this.setStatus(`Checking '${cname.key}'...`);
			let providerExistent: boolean = false;
			let providersMap: Provider[] = this.state.providersMap;
			await asyncForEach(
				providersMap,
				(provider: Provider, index: number) => {
					if (provider.provider === identify(cname.target)) {
						providerExistent = true;
						providersMap[index].count =
							providersMap[index].count + 1;
						this.setState({
							providersMap: providersMap,
						});
					}
				}
			);
			if (cname.noCF && cname.noCF.includes("noCF")) {
				this.setState({
					noCF: this.state.noCF + 1,
				});
			}
			if (!providerExistent) {
				providersMap.push({
					provider: identify(cname.target),
					count: 0,
				});
				this.setState({
					providersMap: providersMap,
				});
			}
			let cnameTarget: string = cname.target;
			if (
				!cnameTarget.startsWith("http://") &&
				!cnameTarget.startsWith("https://")
			) {
				cnameTarget = "http://" + cnameTarget;
			}
			this.setStatus(
				`Pinging '${cname.key}' (${new URL(cnameTarget).hostname})...`
			);
			try {
				const response = await fetch(
					`http://${new URL(cnameTarget).hostname}`,
					{
						timeout: 20000,
						headers: {
							host: `${
								cname.key != "" ? cname.key + "." : ""
							}js.org`,
						},
						redirect: "manual",
					}
				);
				if (!(response.status >= 200 && response.status <= 400)) {
					if (
						response.status === 301 ||
						response.status === 302 ||
						response.status === 307 ||
						response.status === 308
					) {
						if (
							response.headers.get("location") != null ||
							response.headers.get("Location") != null
						) {
							let location: string | null = response.headers.get(
								"location"
							)
								? response.headers.get("location")
								: response.headers.get("Location")
								? response.headers.get("Location")
								: "";
							location =
								location?.slice(-1) === "/"
									? location?.slice(-1)
									: location;
							if (
								location ==
								`https://${new URL(cnameTarget).hostname}`
							) {
								try {
									const response = await fetch(
										`https://${
											new URL(cnameTarget).hostname
										}`,
										{
											timeout: 20000,
											headers: {
												host: `${
													cname.key != ""
														? cname.key + "."
														: ""
												}js.org`,
											},
											redirect: "manual",
										}
									);
									if (
										!(
											response.status >= 200 &&
											response.status <= 400
										)
									) {
										this.warn(
											`Unreachable: '${cname.key}' => '${cname.target}' (${response.status} ${response.statusText})`
										);
									}
								} catch (e) {
									this.warn(
										`Unreachable: '${cname.key}' => '${cname.target}' (${e.message})`
									);
								}
							}
						}
					} else {
						this.warn(
							`Unreachable: '${cname.key}' => '${cname.target}' (${response.status} ${response.statusText})`
						);
					}
				}
			} catch (e) {
				this.warn(
					`Unreachable: '${cname.key}' => '${cname.target}' (${e.message})`
				);
			}
		});
		this.end(this.state.errorCount >= 1 ? 1 : 0);
	}

	warn(message: string) {
		let warnings: string[] = this.state.warnings;
		warnings.push(message);
		let messages: Message[] = this.state.messages;
		messages.push({
			type: "warning",
			message: message,
		});
		this.setState({
			warnings: warnings,
			messages: messages,
			warningCount: this.state.warningCount + 1,
		});
	}

	render() {
		return (
			<React.Fragment>
				<Box>
					<Text> </Text>
				</Box>
				{this.state.messages.map((message: Message) => {
					if (message.type === "warning") {
						return (
							<Box key={`message-warning-${message.message}`}>
								<Text color="yellow">
									{this.getEmoji("⚠️") + "  "}
									<Text bold>Warning:</Text> {message.message}
								</Text>
							</Box>
						);
					} else if (message.type === "error") {
						return (
							<Box key={`message-error-${message.message}`}>
								<Text color="red">
									{this.getEmoji("❌") + " "}
									<Text bold>Error:</Text> {message.message}
								</Text>
							</Box>
						);
					}
				})}
				<Box>
					<Text> </Text>
				</Box>
				<Box>
					<Text color="cyan" bold>
						{!this.state.done && (
							<Fragment>
								<Spinner type="dots" />{" "}
							</Fragment>
						)}
						Status: {this.state.status}
					</Text>
				</Box>
				<Box>
					<Text> </Text>
				</Box>
				{this.state.success && (
					<Box>
						<Text color="green" bold>
							🎉 Success! Everything looks good.
						</Text>
					</Box>
				)}
				{this.state.summary}
			</React.Fragment>
		);
	}
}

export function main() {
	render(<App />);
}
export default main;
