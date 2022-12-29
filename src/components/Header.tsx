import React from 'react';
import {Button, Layout} from "antd";

export const Header = () => {
    const {Header} = Layout;
    return (
        <Header className="container">
            <div style={{padding: "20px", fontSize: "30px", fontWeight: "bold"}}>React Test</div>
        </Header>
    );
};
