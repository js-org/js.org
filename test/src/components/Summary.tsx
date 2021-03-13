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

import React from "react";
import { Box, Text } from "ink";
import BR from "./BR";
import Statistics from "./Statistics";

type Props = {
	errors: string[];
	warnings: string[];
	exitCode: number;
	providers: Provider[];
	totalElements: number;
	noCF: number;
};

export const Summary: React.FunctionComponent<Props> = (props: Props) => {
	return (
		<React.Fragment>
			<BR />
			{props.errors.length === 0 && (
				<Statistics
					providers={props.providers}
					totalElements={props.totalElements}
					noCF={props.noCF}
				/>
			)}
			{props.errors.length >= 1 && (
				<React.Fragment>
					<BR />
					<Box>
						<Text color="red" bold>
							Not showing statistics because errors have occurred.
						</Text>
					</Box>
					<BR />
				</React.Fragment>
			)}
			<Box>
				<Text color="gray">
					{props.exitCode === 0 ? (
						<Text color="green" bold>
							Success!{" "}
						</Text>
					) : (
						<Text color="red" bold>
							Failure!{" "}
						</Text>
					)}
					Done with{" "}
					<Text color="red">
						{props.errors.length} error
						{props.errors.length === 0 || props.errors.length >= 2
							? "s"
							: ""}{" "}
					</Text>
					and{" "}
					<Text color="yellow">
						{props.warnings.length} warning
						{props.warnings.length === 0 ||
						props.warnings.length >= 2
							? "s"
							: ""}
					</Text>
					.
				</Text>
			</Box>
		</React.Fragment>
	);
};

export default Summary;
