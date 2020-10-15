import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './AdminServiceList.css';

const AdminServiceList = () => {
    const [data, setData] = useState([]);
    const handleOnChange = (e, id) =>{
        const updateStatus = {status: e.target.value};
        fetch(`https://radiant-beyond-73631.herokuapp.com/update/${id}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updateStatus)
        })
    }
    useEffect(()=>{
        fetch('https://radiant-beyond-73631.herokuapp.com/getAllData')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className="ml-2">
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Email Id</th>
                <th>Service Name</th>
                <th>Project Details</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(data =>(
                     <tr>
                        <td>{data.displayName}</td>
                        <td>{data.email}</td>
                        <td>{data.serviceName}</td>
                        <td>{data.serviceDescription}</td>
                        <td>
                        <select className="status-design" onChange={(e)=> handleOnChange(e,`${data._id}`)} defaultValue={data.status} id="mySelect">
                            <option value="on going">On going</option>
                            <option value="done">Done</option>
                            <option value="pending">pending</option>
                        </select>
                        </td>
                    </tr>  
                    ))
                }
                      
            </tbody>
        </table>
    </div>
    );
};

export default AdminServiceList;