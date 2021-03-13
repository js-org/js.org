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
import { getCNAMEs, getCNAMEsFile } from "./cnames";
import React, { ReactNode } from "react";
import { render, Box } from "ink";
import { identify } from "./providers";
import { asyncForEach } from "foreach-await";
import checks from "./checks";
import { MessageList } from "./components/MessageList";
import { BR } from "./components/BR";
import { Success } from "./components/Success";
import { Status } from "./components/Status";
import { saveComments } from "./markdown";
import { saveAnnotations } from "./annotations";
import Summary from "./components/Summary";
import { getKeyProperties } from "./util";

class App extends React.Component<
	{},
	{
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
	}
> {
	constructor(props: {}) {
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

	end(withCode = 0) {
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
		if (process.env.CI) {
			this.setStatus("Saving annotations...");
			saveAnnotations(this.state.messages);
			this.setStatus("Saving comments...");
			saveComments({
				errors: this.state.errors,
				warnings: this.state.warnings,
				messages: this.state.messages,
				providers: providersMap,
				totalElements: totalElements,
				noCF: this.state.noCF,
			});
			this.setStatus("Done.");
		}
		this.setState({
			summary: (
				<Summary
					exitCode={withCode}
					errors={this.state.errors}
					warnings={this.state.warnings}
					providers={providersMap}
					totalElements={totalElements}
					noCF={this.state.noCF}
				/>
			),
			status: "Done.",
			done: true,
		});
		process.exit(withCode);
	}

	async componentDidMount() {
		if (!(await checks.cnamesFileExists()))
			this.error("The file 'cnames_active.js' does not exist.", true);
		if (!(await checks.validSyntax()))
			this.error("File 'cnames_active.js' has an invalid syntax.", true);
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
		await asyncForEach(cnames, async (cname: Cname, index: number) => {
			this.setStatus(`Validating '${cname.key}'...`);
			if (
				!(await checks.isValidURL(
					`${cname.key}${cname.key === "" ? "" : "."}js.org`,
					true
				))
			) {
				this.error(
					`CNAME would not be a valid URL: '${cname.key}' => '${
						cname.key
					}${cname.key === "" ? "" : "."}js.org'`,
					true
				);
			}
			if (!(await checks.isValidURL(cname.target))) {
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
			this.setStatus(
				`Pinging '${cname.key}' (${
					new URL(
						cname.target.startsWith("http://") ||
						cname.target.startsWith("https://")
							? cname.target
							: `http://${cname.target}`
					).hostname
				})...`
			);
			if (!(await checks.isReachable(cname.key, cname.target)))
				this.warn(`Unreachable: '${cname.key}' => '${cname.target}'`);
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
				<BR />
				<MessageList messages={this.state.messages} />
				<BR />
				<Status loading={!this.state.done} status={this.state.status} />
				<BR />
				{this.state.success && <Success />}
				{this.state.summary}
			</React.Fragment>
		);
	}
}

export function main() {
	render(<App />);
}
export default main;
