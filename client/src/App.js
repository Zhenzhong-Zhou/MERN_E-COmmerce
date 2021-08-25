import {useEffect} from "react";
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import {useDispatch} from "react-redux";

import {getProducts} from "./actions/products"
import {Form, Products} from "./components";
import logo from "./assets/memories.png";
import useStyles from "./styles";

const App = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch])

	return (
		<Container maxWidth={"lg"}>
			<AppBar className={classes.appBar} position={"static"} color={"inherit"}>
				<Typography className={classes.heading} variant={"h2"} align={"center"}>MERN E-Commerce</Typography>
				<img className={classes.image} src={logo} alt={"logo"} height={"60"}/>
			</AppBar>
			<Grow in>
				<Container>
					<Grid container justifyContent={"space-between"} alignItems={"stretch"} spacing={3}>
						<Grid item xs={12} sm={7}>
							<Products/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form/>
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	)
};

export default App;