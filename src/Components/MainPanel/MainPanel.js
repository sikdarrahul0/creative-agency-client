import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link, Route } from 'react-router-dom';
import { UserContext } from '../../App';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import OrderForm from '../OrderForm/OrderForm';
import ReviewForm from '../ReviewForm/ReviewForm';
import ServiceList from '../ServiceList/ServiceList';
import './MainPanel.css';

const MainPanel = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);
    useEffect(()=>{
        fetch(`https://radiant-beyond-73631.herokuapp.com/admin?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => {
            if(data){
                setAdmin(true);
            }
        })
    },[])
    return (
        <section className="mt-2">
            <div className="row ml-3">
                <div className="col-lg-2 sidebar">
                   <Link to="/home"><h5 className="mb-5 pb-3"><img className="logo-design" src="https://i.ibb.co/sCpn13V/logo.png" alt="logo"/></h5></Link>
                    {
                        admin ?
                        <>
                        <Link className="link-design" to="/mainPanel/"><p>Admin Service List</p></Link>
                        <Link className="link-design" to="/mainPanel/addService"><p>Add Service </p></Link>
                        <Link className="link-design" to="/mainPanel/addAdmin"><p>Make Admin</p></Link>
                        </>
                        :
                        <>
                        <Link className="link-design" to="/mainPanel"><p>Order</p></Link> 
                        <Link className="link-design" to="/mainPanel/servicelist"><p>Service list</p></Link> 
                        <Link className="link-design" to="/mainPanel/reviewForm"><p>Review</p></Link>
                        </>
                    }
                </div>
                <div className="col-lg-10">
                    {
                        admin ?
                        <p className="font-weight-bold float-left inline">Admin</p>
                        :
                        <p className="font-weight-bold float-left inline">Customer</p>
                    }
                   
                    <p className="font-weight-bold float-right inline mr-3">{loggedInUser.displayName}</p>
                    <div className="main-box">
                        {
                            admin ?
                            <>
                              <Route exact path="/mainPanel" component={AdminServiceList} />
                              <Route path="/mainPanel/addService" component={AddService} />
                              <Route path="/mainPanel/addAdmin" component={AddAdmin} />
                            </>
                            :
                            <>
                              <Route exact path="/mainPanel" component={OrderForm} />
                              <Route path="/mainPanel/servicelist" component={ServiceList} />
                              <Route path="/mainPanel/reviewForm" component={ReviewForm} />
                            </>
                        }
                  
                  
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainPanel;