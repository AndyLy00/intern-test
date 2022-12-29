import React from 'react';
import {Button, Layout} from "antd";
import {CloseOutlined} from "@ant-design/icons";
import {Outlet} from "react-router";
import {NavLink} from "react-router-dom";

export const MainPage = () => {
    const {Header, Content, Footer} = Layout;
    return (
        <div>
            <Header className="container">
                <div style={{padding: "20px", fontSize: "30px", fontWeight: "bold"}}>React Test</div>
                <div>
                    <Button style={{margin: "0 30px 30px", fontStyle: "italic"}}>Filter</Button>
                    <Button style={{margin: "0 30px 30px", fontStyle: "italic"}}>Add More</Button>
                </div>
            </Header>

            <Layout className="container" style={{display: "none"}}>
                <main> <Outlet /> </main>
            </Layout>

            <Content className="container" style={{minHeight: "100vh"}}>

                <div className="person_block">
                    <div style={{display: "flex"}}> <div className="person_info"> Name </div> <div className="person_info">Job</div> </div>
                    <div> <div className="person_info" style={{margin: "10px auto"}}> City </div> </div>
                    <div style={{display: "flex"}}> <div className="person_info"> Mail </div> <div className="person_info"> Phone </div> </div>
                    <Button className="close_button"> <CloseOutlined /> </Button>
                </div>

                <Button style={{margin: "0 30px 30px", fontStyle: "italic"}}> Upload More </Button>
            </Content>

            <Footer className="container footer" >AndyLy project</Footer>
        </div>
    );
};
