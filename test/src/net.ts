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

import fetch from "node-fetch";

export const isReachable = async (
	url: string,
	host = new URL(url).hostname
): Promise<boolean> => {
	try {
		const response = await fetch(url, {
			redirect: "manual",
			headers: {
				host: host,
			},
		});
		if (response.status >= 300 && response.status <= 308) {
			if (
				response.headers.get("location") ||
				response.headers.get("Location")
			) {
				let location = response.headers.get("location")
					? response.headers.get("location")
					: response.headers.get("Location")
					? response.headers.get("Location")
					: "";
				if (location?.endsWith("/")) {
					location = location.slice(0, -1);
				}
				let __url: string = url.endsWith("/") ? url.slice(0, -1) : url;
				if (location === __url.replaceAll("http://", "https://")) {
					return (
						(
							await fetch(url.replaceAll("http://", "https://"), {
								redirect: "manual",
								headers: {
									host: host,
								},
							})
						).status === 200
					);
				}
			}
		}
		if (response.status >= 200 && response.status <= 400) {
			return true;
		}
		return false;
	} catch (e) {
		return false;
	}
};

export default {
	isReachable,
};
