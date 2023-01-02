import React, {MutableRefObject, useRef, useState} from 'react';
import {Layout, Button} from "antd";
import apiClient from "../axios/data";

const Post = () => {
    const post_name = useRef() as MutableRefObject<HTMLInputElement>;
    const post_job = useRef() as MutableRefObject<HTMLInputElement>;
    const post_city = useRef() as MutableRefObject<HTMLInputElement>;
    const post_email = useRef() as MutableRefObject<HTMLInputElement>;
    const post_phone = useRef() as MutableRefObject<HTMLInputElement>;

    const [Name, setName] = useState<string>('');
    const [Job, setJob] = useState<string>('');
    const [City, setCity] = useState<string>('');
    const [Email, setEmail] = useState<string>('');
    const [Phone, setPhone] = useState<string>('');

    async function postData() {
        const postData = {
            Name: post_name.current.value,
            Job: post_job.current.value,
            City: post_city.current.value,
            Email: post_email.current.value,
            "Phone Number": post_phone.current.value,
        };

        try {
            const res = await apiClient.post("/", postData);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Layout className="container">

            <div className="person_block" style={{backgroundColor: "#fff0f6"}}>
                <div style={{display: "flex"}}>
                    <input className="person_info"
                           onChange={e => setName(e.target.value)}
                           value={Name}
                           type="text"
                           placeholder='Name'
                           ref={post_name}></input>
                    <input className="person_info"
                           onChange={e => setJob(e.target.value)}
                           value={Job}
                           type="text"
                           placeholder='Job'
                           ref={post_job}></input>
                </div>

                <div>
                    <input className="person_info" style={{margin: "10px 10px", width: "97.5%"}}
                           onChange={e => setCity(e.target.value)}
                           value={City}
                           type="text"
                           placeholder='City'
                           ref={post_city}></input>
                </div>

                <div style={{display: "flex"}}>
                    <input className="person_info"
                           onChange={e => setEmail(e.target.value)}
                           value={Email}
                           type="text"
                           placeholder='Email'
                           ref={post_email}></input>
                    <input className="person_info"
                           onChange={e => setPhone(e.target.value)}
                           value={Phone}
                           type="text"
                           placeholder='Phone'
                           ref={post_phone}></input>
                </div>

                <Button className="close_button" style={{backgroundColor: "#d3adf7"}}
                    // onClick={() => store.registration(Name, Job, City, Email, Phone)}
                        onClick={postData}
                > Add Object </Button>
            </div>
        </Layout>
    );
};

export default Post;
