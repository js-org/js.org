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

import { resolve } from "path";
import { writeFileSync } from "fs";

const buildAnnotations = (messages: Message[]): Annotation[] => {
	let annotations: Annotation[] = [];
	messages.forEach((message: Message) => {
		annotations.push({
			file: "cnames_active.js",
			line: message.line ? message.line : 1,
			title: message.type,
			annotation_level: message.type === "error" ? "failure" : "warning",
			message: message.message,
		});
	});
	return annotations;
};

export const saveAnnotations = (messages: Message[]): boolean => {
	writeFileSync(
		resolve(process.cwd(), "annotations.json"),
		JSON.stringify(buildAnnotations(messages))
	);
	return true;
};
