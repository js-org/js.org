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

type Props = {
	providers: Provider[];
	totalElements: number;
	noCF: number;
};

export class Statistics extends React.Component<
	Props,
	{ othersCount: number }
> {
	constructor(props: Props) {
		super(props);
		this.state = {
			othersCount: 0,
		};
		props.providers.forEach((provider) => {
			if (provider.provider.includes("Other")) {
				this.setState({
					othersCount: provider.count,
				});
			}
		});
	}

	render() {
		return (
			<React.Fragment>
				<Box>
					<Text color="magenta" bold>
						Breakdown of services used:
					</Text>
				</Box>
				{this.props.providers.map((provider: Provider) => {
					if (
						provider.provider !== "Others" &&
						provider.provider !== "Other"
					) {
						return (
							<Box key={`provider-${provider.provider}`}>
								<Text color="whiteBright" bold>
									{provider.provider}:{" "}
								</Text>
								<Text color="whiteBright">
									{(
										(provider.count /
											this.props.totalElements) *
										100
									).toFixed(2)}
									%{" "}
									<Text color="gray">({provider.count})</Text>
								</Text>
							</Box>
						);
					}
				})}
				<Box>
					<Text color="gray">----------------------------</Text>
				</Box>
				<Box>
					<Text color="whiteBright" bold>
						Others:{" "}
					</Text>
					<Text color="whiteBright">
						{(
							(this.state.othersCount /
								this.props.totalElements) *
							100
						).toFixed(2)}
						% <Text color="gray">({this.state.othersCount})</Text>
					</Text>
				</Box>
				<Box>
					<Text color="whiteBright" bold>
						Total:{" "}
					</Text>
					<Text color="whiteBright">{this.props.totalElements}</Text>
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
							((this.props.totalElements - this.props.noCF) /
								this.props.totalElements) *
							100
						).toFixed(2)}
						%{" "}
						<Text color="gray">
							({this.props.totalElements - this.props.noCF})
						</Text>
					</Text>
				</Box>
				<Box>
					<Text color="whiteBright" bold>
						Sites not using Cloudflare:{" "}
					</Text>
					<Text color="whiteBright">
						{(
							(this.props.noCF / this.props.totalElements) *
							100
						).toFixed(2)}
						% <Text color="gray">({this.props.noCF})</Text>
					</Text>
				</Box>
				<Box>
					<Text> </Text>
				</Box>
			</React.Fragment>
		);
	}
}

export default Statistics;
