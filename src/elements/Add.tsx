import React from 'react';
import {Button, Input, Layout} from "antd";

export const Add = () => {
    const {Content} = Layout;
    return (
            <Content>
                <div className="person_block" style={{backgroundColor: "#fff0f6"}}>
                    <div style={{display: "flex"}}> <Input className="person_info"></Input> <Input className="person_info"></Input> </div>
                    <div> <Input className="person_info" style={{margin: "10px auto"}}></Input> </div>
                    <div style={{display: "flex"}}> <Input className="person_info"></Input> <Input className="person_info"></Input> </div>
                    <Button className="close_button" style={{backgroundColor: "#d3adf7"}}> Add </Button>
                </div>

            </Content>

    );
};
