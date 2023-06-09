
import React, { useEffect, useState } from "react";
import axios from "axios";
// import  Layout  from "./../../components/Layout";
import { Table } from "antd";
// import { text } from "express";


const Getallusers = () =>{
    const [users , setUsers] = useState([])

    // getUser===
    const getUsers = async() => {
        try {
            const res = await axios.get('https://api-9e1z.onrender.com/api/user/users')
            if(res.data.success){
                setUsers(res.data.data);
            }else{

            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getUsers()
    },[])

    //antd table========
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',

        },
        {
            title: 'Email',
            dataIndex: 'email'
        },
        {
            title: 'Mobile',
            dataIndex: 'mobile',
            
        },
        {
            title: 'Message',
            dataIndex: 'message',
            
        }
    ]

return(
    <div>
    <h1>Users List</h1>
    <Table columns={columns} dataSource={users}/>
    </div>
)

}

export default Getallusers;