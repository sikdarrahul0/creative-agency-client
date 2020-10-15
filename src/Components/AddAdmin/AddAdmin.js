import React from 'react';
import { useState } from 'react';

const AddAdmin = () => {
    const [email, setEmail] = useState();
    
    const handleBlur = (e) =>{
        setEmail({email : e.target.value});
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://radiant-beyond-73631.herokuapp.com/addAdmin',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(email)
        })
        alert('Admin added successfully');
    }
    return (
        <div className="p-4">
            <form onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <input className="w-50 mb-4 form-control" onBlur={handleBlur} name="email" type="email" placeholder="xyz@gamail.com" required/>
            <input className="btn btn-dark" type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default AddAdmin;