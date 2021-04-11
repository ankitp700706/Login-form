import React from "react";

function TextError(props) {
	return (
		<div style={{ color: "red", fontSize: "0.75rem", paddingLeft: "1rem" }}>
			{props.children}
		</div>
	);
}

export default TextError;
