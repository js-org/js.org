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

import { writeFileSync } from "fs";
import { resolve } from "path";
import MessageList from "./components/MessageList";

const getMarkdown = (options: {
	context: string;
	errors: string[];
	warnings: string[];
	totalElements: number;
	noCF: number;
	providers: Provider[];
	messages: Message[];
}): string => {
	let warningsString: string = "";
	let errorsString: string = "";
	options.messages.forEach((message: Message) => {
		if (message.type === "error") {
			errorsString =
				errorsString + `- ${message.message.replaceAll("'", "`")}\n`;
		}
		if (message.type === "warning") {
			warningsString =
				warningsString + `- ${message.message.replaceAll("'", "`")}\n`;
		}
	});
	if (warningsString === "") warningsString = "No warnings have occurred.";
	if (errorsString === "") errorsString = "No errors have occurred.";
	return `
**Hello! 👋**${"  "}
The validation of your ${options.context} has been completed. ✅${"  "}

### Status
${
	options.errors.length === 0 ? "🎉 **Success!**" : "❌ **Failure!**"
} Done with **${options.errors.length} error${
		options.errors.length === 0 || options.errors.length >= 2 ? "s" : ""
	}** and **${options.warnings.length} warning${
		options.warnings.length === 0 || options.warnings.length >= 2 ? "s" : ""
	}**.

### Details
<details>
        <summary>${options.errors.length} error${
		options.errors.length === 0 || options.errors.length >= 2 ? "s" : ""
	}</summary>
    <br />

${errorsString}
</details>
<details>
    <summary>${options.warnings.length} warning${
		options.warnings.length === 0 || options.warnings.length >= 2 ? "s" : ""
	}</summary>
    <br />

${warningsString}
</details>
<details>
    <summary>Statistics</summary>
    <br />
${
	options.errors.length >= 1
		? "As errors occurred, no statistics were calculated."
		: ""
}
${
	options.errors.length === 0
		? "#### Services  \n\n| Provider | Share |\n| ------------- | -----:|\n" +
		  options.providers
				.map((provider) => {
					return `| **${provider.provider}** | **${(
						(provider.count / options.totalElements) *
						100
					).toFixed(2)}%** (${provider.count}) |\n`;
				})
				.join("")
		: ""
}
${
	options.errors.length === 0
		? `
#### Cloudflare${"  "}

| Status               | Rate |
|----------------------|------|
| **Sites using Cloudflare**     | **${(
				((options.totalElements - options.noCF) /
					options.totalElements) *
				100
		  ).toFixed(2)}%** (${options.totalElements - options.noCF})  |
| **Sites not using Cloudflare** | **${(
				(options.noCF / options.totalElements) *
				100
		  ).toFixed(2)}%**  (${options.noCF}) |
`
		: ""
}
</details>
    `;
};

export const saveComments = (options: {
	messages: Message[];
	errors: string[];
	warnings: string[];
	noCF: number;
	totalElements: number;
	providers: Provider[];
}) => {
	writeFileSync(
		resolve(process.cwd(), "pull_request_comment.md"),
		getMarkdown({
			context: "pull request",
			...options,
		})
	);
	writeFileSync(
		resolve(process.cwd(), "pull_request_comment.md"),
		getMarkdown({
			context: "commit",
			...options,
		})
	);
};
