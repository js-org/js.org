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

import fs from "fs";
import { resolve } from "path";
import prettier from "prettier";
import isURL from "validator/lib/isURL";
import net from "./net";

export const cnamesFileExists = async (): Promise<boolean> => {
	try {
		await fs.promises.access(resolve(process.cwd(), "cnames_active.js"));
	} catch (e) {
		return false;
	}
	return true;
};

export const validSyntax = async (): Promise<boolean> => {
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
		return false;
	}
	return true;
};

export const isValidURL = async (
	url: string,
	underscoreException = false
): Promise<boolean> => {
	if (!isURL(url)) {
		if (
			underscoreException &&
			isURL(url.replaceAll("_", "")) &&
			!url.startsWith("_") &&
			!url.endsWith("_")
		) {
			return true;
		}
		return false;
	}
	return true;
};

export const isReachable = async (
	cname: string,
	_url: string
): Promise<boolean> => {
	let url: string = _url;
	if (!url.startsWith("http://") || !url.startsWith("https://")) {
		url = `http://${url}`;
	}
	url = `http://${new URL(url).hostname}`;
	return await net.isReachable(
		url,
		`${cname != "" ? cname + "." : ""}js.org`
	);
};

export default {
	validSyntax,
	cnamesFileExists,
	isValidURL,
	isReachable,
};
