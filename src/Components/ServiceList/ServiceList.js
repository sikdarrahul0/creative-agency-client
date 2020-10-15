import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch(`https://radiant-beyond-73631.herokuapp.com/getData?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className="row ml-3">
            {
                data &&
                data.map(dt => (
                    <div style={{border: "1px solid lightgrey", backgroundColor: "white", borderRadius: "5px"}} className="col-md-5 mt-3 mx-3 p-3">
                        <h4>{dt.serviceName}</h4>
                        <p>{dt.serviceDescription}</p>
                        <button className="btn btn-dark">{dt.status}</button>
                    </div>
                ))
            }
                           
         </div>
    );
};

export default ServiceList;