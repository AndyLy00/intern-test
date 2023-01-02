import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {Button, Layout} from "antd";
import {CloseOutlined} from "@ant-design/icons";
import apiClient from "../axios/data";
// import axios from "axios";

const ObjectAndDelete = () => {
    const [persons, setPerson] = useState<any>([]);
    const delete_id = useRef() as MutableRefObject<HTMLButtonElement>;

    const fetchData = async () => {
        const {data} = await apiClient.get("/")
        setPerson(data)
    }

    useEffect(() => {
        fetchData().then();
    }, []);

    async function deleteDataById() {
        const id = delete_id.current.value;

            fetch(`http://localhost:3001/data/${id}`, {method: 'DELETE'})
                .then(() => console.log("Deleted"));
        }

    return (
        <Layout style={{backgroundColor: "#bae0ff", width: "100%", maxWidth: "700px", margin: "0 auto"}}>

            {persons.map((person: { id: number; Job: string; City: string; Name: string; Email: string; DateCreated: Date; "Phone Number": string; }) => (
                <div className="person_block" key={person.id}>
                    <div style={{display: "flex"}}>
                        <div className="person_info"> {person.Name} </div>
                        <div className="person_info"> {person.Job} </div>
                    </div>
                    <div>
                        <div className="person_info"
                             style={{margin: "10px auto", width: "97%"}}> {person.City} </div>
                    </div>
                    <div style={{display: "flex"}}>
                        <div className="person_info"> {person.Email} </div>
                        <div className="person_info"> {person["Phone Number"]} </div>
                    </div>
                    <Button className="close_button" ref={delete_id} value={person.id} onClick={deleteDataById}> <CloseOutlined/> </Button>
                </div>
            ))}
        </Layout>
    );
};

export default ObjectAndDelete;
