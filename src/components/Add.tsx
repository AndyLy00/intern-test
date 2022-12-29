import React from 'react';
import {Button, Layout} from "antd";
import {CloseOutlined} from "@ant-design/icons";

export const Add = () => {
    const {Content} = Layout;
    return (
        <>
            <Content className="container" style={{minHeight: "100vh"}}>
                <div className="person_block">
                    <div style={{display: "flex"}}> <input className="person_info"> Name </input> <input className="person_info">Job</input> </div>
                    <div> <input className="person_info" style={{margin: "10px auto"}}> City </input> </div>
                    <div style={{display: "flex"}}> <input className="person_info"> Mail </input> <input className="person_info"> Phone </input> </div>
                    <Button className="close_button"> <CloseOutlined /> </Button>
                </div>
                <Button style={{margin: "0 30px 30px", fontStyle: "italic"}}> Upload More </Button>
            </Content>
        </>
    );
};
