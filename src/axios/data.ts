import axios from "axios";

export default axios.create({
    baseURL: "https://retoolapi.dev/geeOvB/data",
    headers: {
        "Content-type": "application/json"
    }
});