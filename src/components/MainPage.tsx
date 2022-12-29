import React from 'react';
import {Button, Layout} from "antd";
import {CloseOutlined} from "@ant-design/icons";
import {NavLink, Outlet} from "react-router-dom";

export const MainPage = () => {
    const {Content} = Layout;
    return (
        <Content>
            <div>
                <Button style={{margin: "30px 30px 0", fontStyle: "italic"}}> <NavLink to="/filter"> Filter </NavLink> </Button>
                <Button style={{margin: "30px 30px 0", fontStyle: "italic"}}> <NavLink to="/add"> Add More </NavLink> </Button>
            </div>

            <Layout style={{backgroundColor: "#bae0ff"}}>
                <main><Outlet/></main>
            </Layout>

            <div className="person_block">
                <div style={{display: "flex"}}>
                    <div className="person_info"> Name</div>
                    <div className="person_info">Job</div>
                </div>
                <div>
                    <div className="person_info" style={{margin: "10px auto", width: "97%"}}> City</div>
                </div>
                <div style={{display: "flex"}}>
                    <div className="person_info"> Mail</div>
                    <div className="person_info"> Phone</div>
                </div>
                <Button className="close_button"> <CloseOutlined/> </Button>
            </div>

            <Button style={{margin: "0 30px 30px", fontStyle: "italic", color: "#1677ff"}}> Upload More </Button>
        </Content>
    );
};
