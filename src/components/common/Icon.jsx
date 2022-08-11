import React from "react";
import icons from "helpers/icons.js";

const Icon = ({ name }) => {
	return (
		<i>
			<span dangerouslySetInnerHTML={{ __html: icons[name] }}></span>
		</i>
	);
};

export default Icon;
