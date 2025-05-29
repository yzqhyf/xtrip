import PropTypes from "prop-types";
import { Box } from "@mui/material";

const Panel = (props) => {
	const { children, value, index, visibility, ...other } = props;

	return (
		<div className="p3" hidden={visibility}>
			{<Box>{children}</Box>}
		</div>
	);
};

Panel.prototype = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

export default Panel;
