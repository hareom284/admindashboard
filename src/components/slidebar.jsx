import React from 'react';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import './slidebar.scss';

const Slidebar = () => {
    return (
        <div className="container">
            <div className="sidebar">
                <h1 className='text-center logo'>Logo</h1>
                <ul className="sidebar-menu">
                    <li className='active'><a href="/">Dashboard</a></li>
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="/">Users</a></li>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Orders</a></li>
                    <li><a href="/">Delivery</a></li>
                    <li><a href="/">Stats</a></li>
                    <li><a href="/">Notifications</a></li>
                    <li><a href="/">System Health</a></li>
                    <li><a href="/">Log</a></li>
                    <li><a href="/">Settings</a></li>
                    <li><a href="/">Profile</a></li>
                    <li><a href="/">Logout</a></li>
                    <li><a href="/">Log</a></li>
                    <li><a href="/">Settings</a></li>
                    <li><a href="/">Profile</a></li>
                    <li><a href="/">Logout</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Slidebar;
