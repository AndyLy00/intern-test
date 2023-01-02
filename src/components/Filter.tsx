import React, {useState} from 'react';
import axios from "axios";
import {Button, Layout} from "antd";
import {CloseOutlined} from "@ant-design/icons";


const Filter = () => {
    // const get_id = useRef() as MutableRefObject<HTMLInputElement>;
    // const get_name = useRef() as MutableRefObject<HTMLInputElement>;

    const [value, setValue] = useState('');
    const [data, setData] = useState<any[]>([]);
    const [nameValue, setNameValue] = useState('');
    const [nameData, setNameData] = useState<any[]>([]);


    async function getDataById() {
        const id = value

        if (id) {
            try {
                const res = await axios.get(`http://localhost:3001/data?id=${id}`);
                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        }
    }

    async function getDataByName() {
        const name = nameValue;

        if (name) {
            try {
                const res = await axios.get(`http://localhost:3001/data?Name=${name}`, {
                    params: {
                        Name: name,
                    },
                });
                setNameData(res.data);

                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <Layout className="container">
            <div style={{margin: "0 auto"}}>
                <input value={value} onChange={e => setValue(e.target.value)} placeholder="Id"/>
                <Button style={{margin: "30px 30px", fontStyle: "italic"}} onClick={getDataById}>Get by Id</Button>

                <input value={nameValue} onChange={e => setNameValue(e.target.value)} placeholder="Name"/>
                <Button style={{margin: "30px 30px", fontStyle: "italic"}} onClick={getDataByName}>Find By
                    Name</Button>
            </div>

            {data.map(item => {
                return (
                        <div key={item.id} className="person_block" style={{backgroundColor: "#fff0f6"}}>
                        <div style={{display: "flex"}}>
                            <div className="person_info">{item.Name}</div>
                            <div className="person_info">{item.Job}</div>
                        </div>
                        <div>
                            <div className="person_info" style={{margin: "10px auto", width: "97%"}}>{item.City}</div>
                        </div>
                        <div style={{display: "flex"}}>
                            <div className="person_info">{item.Email}</div>
                            <div className="person_info">{item["Phone Number"]}</div>
                        </div>
                            <Button className="close_button"> <CloseOutlined/> </Button>
                        </div>
                )
            })}

            {nameData.map(item => {
                return (
                    <div key={item.id} className="person_block" style={{backgroundColor: "#fff0f6"}}>
                        <div style={{display: "flex"}}>
                            <div className="person_info">{item.Name}</div>
                            <div className="person_info">{item.Job}</div>
                        </div>
                        <div>
                            <div className="person_info" style={{margin: "10px auto", width: "97%"}}>{item.City}</div>
                        </div>
                        <div style={{display: "flex"}}>
                            <div className="person_info">{item.Email}</div>
                            <div className="person_info">{item["Phone Number"]}</div>
                        </div>
                        <Button className="close_button"> <CloseOutlined/> </Button>
                    </div>
                )
            })}

        </Layout>


    );
};

export default Filter;
