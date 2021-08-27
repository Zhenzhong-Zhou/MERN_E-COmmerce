import {useState} from "react";
import {TextField, Button, Typography, Paper} from "@material-ui/core";
import FileBase from "react-file-base64";
import {useDispatch} from "react-redux";

import useStyles from "./styles";
import {createReactProduct} from "../../actions/products";

const Form = () => {
	const [productData, setProductData] = useState({creator: "", title: "", description: "", tags: "", price: "", selectedFile: ""});
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(createReactProduct(productData))
	};

	const clear = () => {};

	return (
		<Paper className={classes.paper}>
			<form autoComplete={"off"} noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
				<Typography variant={"h6"}>Creating a Product</Typography>
				<TextField name={"creator"} variant={"outlined"} label={"Creator"} fullWidth value={productData.creator} onChange={(event => setProductData({...productData, creator: event.target.value}))}/>
				<TextField name={"description"} variant={"outlined"} label={"Description"} fullWidth value={productData.description} onChange={(event => setProductData({...productData, description: event.target.value}))}/>
				<TextField name={"tags"} variant={"outlined"} label={"Tags"} fullWidth value={productData.tags} onChange={(event => setProductData({...productData, tags: event.target.value}))}/>
				<TextField name={"price"} variant={"outlined"} label={"Price"} fullWidth value={productData.price} onChange={(event => setProductData({...productData, price: event.target.value}))}/>
				<div className={classes.fileInput}>
					<FileBase type={"file"} multiple={false} onDone={({base64}) => setProductData({...productData, selectedFile: base64})}/>
				</div>
				<Button className={classes.buttonSubmit} variant={"contained"} color={"primary"} size={"large"} type={"submit"} fullWidth>Submit</Button>
				<Button variant={"contained"} color={"secondary"} size={"small"} onClick={clear} fullWidth>Clear</Button>
			</form>
		</Paper>
	)
};

export default Form;