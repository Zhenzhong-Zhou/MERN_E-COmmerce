import axios from "axios";

const url = "http://localhost:9000";

const fetchPosts = () => axios.get(url);