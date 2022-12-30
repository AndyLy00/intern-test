import React, {MutableRefObject, useRef} from 'react';
import apiClient from "../axios/data";
import axios from "axios";
import {Button, Layout} from "antd";


const Filter = () => {
    const get_id = useRef() as MutableRefObject<HTMLInputElement>;
    const get_name = useRef() as MutableRefObject<HTMLInputElement>;


    async function getDataById() {
        const id = get_id.current.value;

        if (id) {
            try {
                const res = await axios.get(`https://retoolapi.dev/geeOvB/data?id=${id}`);
                console.log(res);

            } catch (err) {
                console.log(err);
            }
        }
    }

    async function getDataByName() {
        const title = get_name.current.value;

        if (title) {
            try {
                const res = await apiClient.get("/", {
                    params: {
                        Name: title,
                    },
                });

                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <Layout className="container">
            <div style={{margin: "0 auto"}}>
                <input type="text" ref={get_id} className="form-control ml-2" placeholder="Id"/>
                <Button style={{margin: "30px 30px", fontStyle: "italic"}} onClick={getDataById}>Get by Id</Button>

                <input type="text" ref={get_name} className="form-control ml-2" placeholder="Name"/>
                <Button style={{margin: "30px 30px", fontStyle: "italic"}} onClick={getDataByName}>Find By
                    Name</Button>
            </div>
        </Layout>


    );
};

export default Filter;