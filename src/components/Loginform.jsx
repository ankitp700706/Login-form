import { Paper, makeStyles, TextField, Button } from "@material-ui/core";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import Avatar from "@material-ui/core/Avatar";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";


function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
	mainConatiner: {
		height: "100vh",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		background:
			"linear-gradient(235deg, #FFFFFF 0%, #000F25 100%), linear-gradient(180deg, #6100FF 0%, #000000 100%), linear-gradient(235deg, #FFA3AC 0%, #FFA3AC 40%, #00043C calc(40% + 1px), #00043C 60%, #005D6C calc(60% + 1px), #005D6C 70%, #00C9B1 calc(70% + 1px), #00C9B1 100%), linear-gradient(125deg, #FFA3AC 0%, #FFA3AC 40%, #00043C calc(40% + 1px), #00043C 60%, #005D6C calc(60% + 1px), #005D6C 70%, #00C9B1 calc(70% + 1px), #00C9B1 100%)",
		backgroundBlendMode: "soft-light, screen, darken, normal",
	},
	formContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "95%",
		width: "35%",
		borderRadius: "2rem",
	},
	formPaper: {
		height: "100%",
		width: "100%",
		borderRadius: "2rem",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	headerBackground: {
		height: "25%",
		width: "100%",
		background:
			"linear-gradient(235deg, #FFFFFF 0%, #000F25 100%), linear-gradient(180deg, #6100FF 0%, #000000 100%), linear-gradient(235deg, #FFA3AC 0%, #FFA3AC 40%, #00043C calc(40% + 1px), #00043C 60%, #005D6C calc(60% + 1px), #005D6C 70%, #00C9B1 calc(70% + 1px), #00C9B1 100%), linear-gradient(125deg, #FFA3AC 0%, #FFA3AC 40%, #00043C calc(40% + 1px), #00043C 60%, #005D6C calc(60% + 1px), #005D6C 70%, #00C9B1 calc(70% + 1px), #00C9B1 100%)",
		backgroundBlendMode: "soft-light, screen, darken, normal",
		borderTopLeftRadius: "2rem",
		borderTopRightRadius: "2rem",
	},
	avatarlarge: {
		height: "10rem",
		width: "10rem",
		transform: "translate(0,-50%)",
	},
	formikContainer: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "flex-start",
		transform: "translate(0,-12%)",
	},
	fieldConatiner: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	Field: {
		margin: "1rem",
	},
	btn: {
		width: "100%",
		display: "flex",
		justifyContent: "space-evenly",
	},
}));

function Login({ history }) {
	const classes = useStyles();
	const [opensuc, setOpensuc] = React.useState(false);
	const [openfail, setOpenfail] = React.useState(false);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpensuc(false);
		setOpenfail(false);
	};

	const data = {
		name: "rohit",
		email: "rroo@gmail.com",
		password: "1234567890",
		phone: "9876543210",
	};
	const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

	const validationSchema = Yup.object({
		name: Yup.string()
			.min(2, "Too Short!")
			.max(70, "Too Long!")
			.required("Required"),
		email: Yup.string().email("Invalid email").required("Required"),
		password: Yup.string("Enter your password")
			.min(8, "Password should be of minimum 8 characters length")
			.required("Password is required"),
		phone: Yup.string()
			.matches(phoneRegExp, "Phone number is not valid")
			.required("Required"),
	});

	const initialValues = {
		name: "",
		email: "",
		password: "",
		phone: "",
	};

	const onSubmit = (values, { resetForm }) => {
		console.log(values);
		console.log(data);
		resetForm();
		if (JSON.stringify(values) === JSON.stringify(data)) {
			setOpensuc(true)
			setTimeout(()=>{
				history.push("/landing");
			},1000)
		} else {
			setOpenfail(true);
		}
	};

	return (
		<div className={classes.mainConatiner}>
			<div className={classes.formContainer}>
				<Paper className={classes.formPaper} elevation={5}>
					<div className={classes.headerBackground} />
					<Avatar
						alt="Remy Sharp"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU"
						className={classes.avatarlarge}
					/>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						validateOnMount
						onSubmit={onSubmit}
					>
						{(formik) => {
							return (
								<Form className={classes.formikContainer}>
									<div className={classes.fieldConatiner}>
										<div className={classes.Field}>
											<Field
												as={TextField}
												name="name"
												label="Name"
												size="medium"
												required
												variant="outlined"
											/>
											<ErrorMessage name="name" component={TextError} />
										</div>
										<div className={classes.Field}>
											<Field
												as={TextField}
												name="email"
												label="Email"
												size="medium"
												required
												variant="outlined"
											/>
											<ErrorMessage name="email" component={TextError} />
										</div>
										<div className={classes.Field}>
											<Field
												as={TextField}
												name="password"
												label="password"
												size="medium"
												type="password"
												required
												variant="outlined"
											/>
											<ErrorMessage name="password" component={TextError} />
										</div>
										<div className={classes.Field}>
											<Field
												as={TextField}
												name="phone"
												label="Phone"
												size="medium"
												required
												variant="outlined"
											/>
											<ErrorMessage name="phone" component={TextError} />
										</div>
									</div>
									<div className={classes.btn}>
										<Button
											style={{ borderRadius: "2rem" }}
											variant="contained"
											color="primary"
											type="reset"
											onClick={(e) => formik.resetForm()}
										>
											{" "}
											Reset
										</Button>
										<Button
											style={{ borderRadius: "2rem" }}
											variant="contained"
											color="secondary"
											type="submit"
										>
											{" "}
											Submit
										</Button>
										<Snackbar open={openfail} autoHideDuration={6000} onClose={handleClose}>
											<Alert onClose={handleClose} severity="error">
          										You are not a valid user
        									</Alert>
      									</Snackbar>
										<Snackbar open={opensuc} autoHideDuration={6000} onClose={handleClose}>
											<Alert onClose={handleClose} severity="success">
          										You are a valid user
        									</Alert>
      									</Snackbar>
									</div>
								</Form>
							);
						}}
					</Formik>
				</Paper>
			</div>
		</div>
	);
}

export default Login;
