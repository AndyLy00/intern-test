import React, {useState} from 'react';
import {Layout, Button} from "antd";
import apiClient from "../axios/data";
import moment from "moment";

const Post = () => {

    const [name, setName] = useState<string>('');
    const [job, setJob] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
        setFunction(event.target.value)
    }

    async function postData() {
        let date = moment();
        let today = date.format('MMM DD, YYYY h:mm a');

        const postData = {
            Name: name,
            Job: job,
            City: city,
            Email: email,
            DateCreated: today,
            "Phone Number": phone,
        };

        try {
            const res = await apiClient.post("/", postData);
            window.location.reload();
            console.log(res);
            // console.log(today);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Layout className="container">

            <div className="person_block" style={{backgroundColor: "#fff0f6"}}>
                <div style={{display: "flex"}}>
                    <input className="person_info"
                        // onChange={e => setName(e.target.value)}
                           value={name}
                           type="text"
                           placeholder='Name'
                           onChange={(e) => inputChangeHandler(setName, e)}></input>
                    <input className="person_info"
                           onChange={(e) => inputChangeHandler(setJob, e)}
                           value={job}
                           type="text"
                           placeholder='Job'></input>
                </div>

                <div>
                    <input className="person_info" style={{margin: "10px 10px", width: "97.5%"}}
                           onChange={(e) => inputChangeHandler(setCity, e)}
                           value={city}
                           type="text"
                           placeholder='City'></input>
                </div>

                <div style={{display: "flex"}}>
                    <input className="person_info"
                           onChange={(e) => inputChangeHandler(setEmail, e)}
                           value={email}
                           type="text"
                           placeholder='Email'></input>
                    <input className="person_info"
                           onChange={(e) => inputChangeHandler(setPhone, e)}
                           value={phone}
                           type="text"
                           placeholder='Phone'></input>
                </div>

                <Button className="close_button" style={{backgroundColor: "#d3adf7"}}
                        onClick={postData}> Add Object </Button>
            </div>
        </Layout>
    );
};

export default Post;
