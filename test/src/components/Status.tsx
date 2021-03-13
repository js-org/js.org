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
import Spinner from "ink-spinner";

type Props = {
	status: string;
	loading: boolean;
};

export const Status: React.FunctionComponent<Props> = (props: Props) => {
	return (
		<Box>
			<Text color="cyan" bold>
				{props.loading && (
					<React.Fragment>
						<Spinner type="dots" />{" "}
					</React.Fragment>
				)}
				Status: {props.status}
			</Text>
		</Box>
	);
};

export default Status;
