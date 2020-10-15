import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';

const OrderForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [data, setData] = useState({status: 'pending'});

    const handleBlur = (e) => {
        const newData ={ ...loggedInUser, ...data};
        if(e.target.name == 'serviceName'){
            newData.serviceName = e.target.value;
            setData(newData);
        }
        else if(e.target.name == 'serviceDescription'){
            newData.serviceDescription = e.target.value;
            setData(newData);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://radiant-beyond-73631.herokuapp.com/addOrder',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        alert('Order received successfully');
    }
    return (
        <div className="order-box pt-5 pl-4">
             <form onSubmit={handleSubmit}>
                 <input className="w-50 mb-4 form-control" type="text" placeholder="Your name" defaultValue={loggedInUser.displayName}/>
                 <input className="w-50 mb-4 form-control" type="email" placeholder="Your email address" defaultValue={loggedInUser.email}/>
                 <input className="w-50 mb-4 form-control" name="serviceName" onBlur={handleBlur} type="text" placeholder="Service name" required/>
                 <textarea className="w-50 mb-4 form-control" name="serviceDescription" onBlur={handleBlur} rows="4" cols="80" placeholder="Project description" required></textarea>
                 <input className="btn btn-dark w-25" type="submit" value="Send"/>
             </form>
        </div>
    );
};

export default OrderForm;