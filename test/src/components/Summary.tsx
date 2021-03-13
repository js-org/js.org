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

export class Summary extends React.Component<Props> {
	render() {
		return (
			<React.Fragment>
				<BR />
				{this.props.errors.length === 0 && (
					<Statistics
						providers={this.props.providers}
						totalElements={this.props.totalElements}
						noCF={this.props.noCF}
					/>
				)}
				{this.props.errors.length >= 1 && (
					<React.Fragment>
						<BR />
						<Box>
							<Text color="red" bold>
								Not showing statistics because errors have
								occurred.
							</Text>
						</Box>
						<BR />
					</React.Fragment>
				)}
				<Box>
					<Text color="gray">
						{this.props.exitCode === 0 ? (
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
							{this.props.errors.length} error
							{this.props.errors.length === 0 ||
							this.props.errors.length >= 2
								? "s"
								: ""}{" "}
						</Text>
						and{" "}
						<Text color="yellow">
							{this.props.warnings.length} warning
							{this.props.warnings.length === 0 ||
							this.props.warnings.length >= 2
								? "s"
								: ""}
						</Text>
						.
					</Text>
				</Box>
			</React.Fragment>
		);
	}
}

export default Summary;
