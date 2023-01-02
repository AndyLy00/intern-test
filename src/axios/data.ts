import axios from "axios";

export default axios.create({
    // baseURL: "https://retoolapi.dev/geeOvB/data",
    baseURL: "http://localhost:3001/data",
    headers: {
        "Content-type": "application/json"
    }
});