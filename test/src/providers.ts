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

function urlWithoutProtocol(url: string): string {
	if (url.startsWith("https://")) {
		return url.substring(8);
	}
	if (url.startsWith("http://")) {
		return url.substring(7);
	}
	return url;
}

function isVercel(url: string): boolean {
	if (url.match(/^(?:https?:\/\/)?(?:[^.]+\.)?vercel\.app(\/.*)?$/gi))
		return true;
	if (url.match(/^(?:https?:\/\/)?(?:[^.]+\.)?now\.sh(\/.*)?$/gi))
		return true;
	if (url.toLowerCase() === "cname.vercel-dns.com") return true;
	return false;
}

function isNetlify(url: string): boolean {
	if (url.match(/^(?:https?:\/\/)?(?:[^.]+\.)?netlify\.app(\/.*)?$/gi))
		return true;
	if (url.match(/^(?:https?:\/\/)?(?:[^.]+\.)?netlify\.com(\/.*)?$/gi))
		return true;
	return false;
}

function isGithub(url: string): boolean {
	if (url.match(/^(?:https?:\/\/)?(?:[^.]+\.)?github\.io(\/.*)?$/gi))
		return true;
	if (url.match(/^(?:https?:\/\/)?(?:[^.]+\.)?github\.me(\/.*)?$/gi))
		return true;
	if (url.match(/^(?:https?:\/\/)?(?:[^.]+\.)?github\.com(\/.*)?$/gi))
		return true;
	return false;
}

function isGitbook(url: string): boolean {
	if (url.match(/^(?:https?:\/\/)?(?:[^.]+\.)?gitbooks\.io(\/.*)?$/gi))
		return true;
	if (url.match(/^(?:https?:\/\/)?(?:[^.]+\.)?gitbook\.com(\/.*)?$/gi))
		return true;
	return false;
}

function isGitlab(url: string): boolean {
	if (url.match(/^(?:https?:\/\/)?(?:[^.]+\.)?gitlab\.io(\/.*)?$/gi))
		return true;
	return false;
}

function isReplit(url: string): boolean {
	if (url.match(/^(?:https?:\/\/)?(?:[^.]+\.)?repl\.co(\/.*)?$/gi))
		return true;
	return false;
}

export function identify(url: string): string {
	const _url: string = urlWithoutProtocol(url);
	if (isVercel(_url)) {
		return "Vercel";
	}
	if (isNetlify(_url)) {
		return "Netlify";
	}
	if (isGithub(_url)) {
		return "GitHub Pages";
	}
	if (isGitbook(_url)) {
		return "Gitbook.com";
	}
	if (isGitlab(_url)) {
		return "GitLab";
	}
	if (isReplit(_url)) {
		return "Replit";
	}
	return "Other";
}

export default identify;
