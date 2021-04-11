import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	landingContainer: {
		height: "100vh",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "white",
		fontSize: "5rem",
		background:
			"linear-gradient(235deg, #BABC4A 0%, #000000 100%), linear-gradient(235deg, #0026AC 0%, #282534 100%), linear-gradient(235deg, #00FFD1 0%, #000000 100%), radial-gradient(120% 185% at 25% -25%, #EEEEEE 0%, #EEEEEE 40%, #7971EA calc(40% + 1px), #7971EA 50%, #393E46 calc(50% + 1px), #393E46 70%, #222831 calc(70% + 1px), #222831 100%), radial-gradient(70% 140% at 90% 10%, #F5F5C6 0%, #F5F5C6 30%, #7DA87B calc(30% + 1px), #7DA87B 60%, #326765 calc(60% + 1px), #326765 80%, #27253D calc(80% + 1px), #27253D 100%)",
		backgroundBlendMode: "overlay, lighten, overlay, color-burn, normal",
	},
});

function LandingPage() {
	const classes = useStyles();
	return <div className={classes.landingContainer}>Hello world</div>;
}

export default LandingPage;
