import React from 'react';
import {Button, Layout} from "antd";
import {CloseOutlined} from "@ant-design/icons";
import apiClient from "../axios/data";
import {Fetch} from "../axios/Fetch";

const ObjectAndDelete = () => {
    const {data} = Fetch();

    async function deleteDataById(id: any) {
        await apiClient.delete(`/` + id);
        window.location.reload();
    }

    return (
        <Layout style={{backgroundColor: "#bae0ff", width: "100%", maxWidth: "700px", margin: "0 auto"}}>
            {data.map((person: { id: number; Job: string; City: string; Name: string; Email: string; DateCreated: Date; "Phone Number": string; }) => (
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
                    <Button className="close_button" onClick={deleteDataById.bind(this, person.id)}>
                        <CloseOutlined/> </Button>
                </div>
            ))}
        </Layout>
    );
};

export default ObjectAndDelete;
