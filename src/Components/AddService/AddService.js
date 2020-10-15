import React, { useState } from 'react';

const AddService = () => {
    const [service, setService] = useState({});
    const handleBlur = (e) => {
        const newData = {...service};
        if(e.target.name == 'title'){
            newData.title = e.target.value;
            setService(newData);
        }
        if(e.target.name == 'description'){
            newData.description = e.target.value;
            setService(newData);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://radiant-beyond-73631.herokuapp.com/addService',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('New service added successfully');
            }
        })
    }
    return (
        <div className="order-box pt-5 pl-4">
            <form onSubmit={handleSubmit}>
                <label htmlFor=""><strong>Title</strong></label>
                <input className="w-50 mb-4 form-control" onBlur={handleBlur} name="title" type="text" placeholder="Enter title" required/>
                <label htmlFor=""><strong>Description</strong></label>
                <textarea className="w-50 mb-4 form-control" onBlur={handleBlur} name="description" rows="4" cols="80" placeholder="Enter description" required></textarea>
                <input className="btn btn-dark w-25" type="submit" value="Submit"/>
            </form>
   </div>
    );
};

export default AddService;