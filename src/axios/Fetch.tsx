import {useEffect, useState} from 'react';
import apiClient from "./data";

export const Fetch = () => {
    const [persons, setPerson] = useState<any>([]);

    const fetchData = async () => {
        const {data} = await apiClient.get("/");
        setPerson(data);
    };

    useEffect(() => {
        fetchData().then();
    }, []);

    return {
        data: persons,
        fetchData
    };
};

