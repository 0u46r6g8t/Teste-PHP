import axios from "axios";

export default axios.create({
    baseURL: "http://ec2-54-167-32-230.compute-1.amazonaws.com:8080"
})