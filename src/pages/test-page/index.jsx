import React, { useEffect, useState } from "react";
import SearchPanel from "./search-panel";
import SearchList from "./search-list";
import qs from "qs";
import { cleanObject } from "utils";
const apiUrl = process.env.REACT_APP_API_URL;

const HomePage = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    });
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);


    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async res => {
            if (res.ok) {
                setList(await res.json())
            }
        })
    }, [param]);

    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async res => {
            if (res.ok) {
                setUsers(await res.json())
            }
        })
    }, []);

    return <div>
        <h3>testpage</h3>
        <SearchPanel param={param} setParam={setParam} users={users} />
        <SearchList list={list} users={users} />
    </div>
}

export default HomePage;