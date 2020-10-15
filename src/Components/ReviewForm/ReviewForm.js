import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';

const ReviewForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [data, setData] = useState({});
    const handleBlur = (e) => {
        const newData = {name: loggedInUser.displayName, img: 'https://i.ibb.co/RyGvkWx/customer-3.png', ...data};
        if(e.target.name == 'designation')
        {
            newData.designation = e.target.value;
            setData(newData);
        }
        if(e.target.name == 'review')
        {
            newData.review = e.target.value;
            setData(newData);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://radiant-beyond-73631.herokuapp.com/addReview',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        alert('Review received successfully');
    }
    return (
            <div className="order-box pt-5 pl-4">
             <form onSubmit={handleSubmit}>
                 <input className="w-50 mb-4 form-control" type="text" placeholder="Your name" defaultValue={loggedInUser.displayName}/>
                 <input className="w-50 mb-4 form-control" name="designation" onBlur={handleBlur} type="text" placeholder="Designation"/>
                 <textarea className="w-50 mb-4 form-control" name="review" onBlur={handleBlur} rows="5" cols="80" placeholder="Description"></textarea>
                 <input className="btn btn-dark w-25" type="submit" value="Submit"/>
             </form>
        </div>
    );
};

export default ReviewForm;