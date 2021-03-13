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
	messages: Message[];
};

export class MessageList extends React.Component<Props> {
	render() {
		return (
			<React.Fragment>
				{this.props.messages.map((message: Message) => {
					if (message.type === "warning") {
						return (
							<Box key={`message-warning-${message.message}`}>
								<Text color="yellow">
									<Text bold>Warning:</Text> {message.message}
								</Text>
							</Box>
						);
					} else if (message.type === "error") {
						return (
							<Box key={`message-error-${message.message}`}>
								<Text color="red">
									<Text bold>Error:</Text> {message.message}
								</Text>
							</Box>
						);
					}
				})}
			</React.Fragment>
		);
	}
}

export default MessageList;
