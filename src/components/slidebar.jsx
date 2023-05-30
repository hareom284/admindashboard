import React from 'react';
import './slidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className='logo'>adminpanel</h2>
            <hr className='divider'></hr>
            <div className="sidebar-menu">
                <div className='menu-item'>
                    <i className="material-icons">dashboard</i>
                    <span>Dashboard</span>
                </div>
                <div className='menu-section'>
                    <div className='menu-header'>User Lists</div>
                    <div className="menu-item">
                        <i className="material-icons">person</i>
                        <span>Users</span>
                    </div>
                    <div className="menu-item">
                        <i className="material-icons">shopping_cart</i>
                        <span>Products</span>
                    </div>
                    <div className="menu-item">
                        <i className="material-icons">shopping_basket</i>
                        <span>Orders</span>
                    </div>
                    <div className="menu-item">
                        <i className="material-icons">local_shipping</i>
                        <span>Delivery</span>
                    </div>
                </div>
                <div className='menu-section'>

                    <div className='menu-header'>Trending</div>
                    <div className="menu-item">
                        <i className="material-icons">trending_up</i>
                        <span>Stats</span>
                    </div>
                    <div className="menu-item">
                        <i className="material-icons">notifications</i>
                        <span>Notifications</span>
                    </div>
                    <div className="menu-item">
                        <i className="material-icons">settings_applications</i>
                        <span>System Health</span>
                    </div>
                    <div className="menu-item">
                        <i className="material-icons">assignment</i>
                        <span>Log</span>
                    </div>
                    <div className="menu-item">
                        <i className="material-icons">settings</i>
                        <span>Settings</span>
                    </div>
                </div>
                <div className='menu-section'>
                    <div className='menu-header'>Settings</div>
                    <div className="menu-item">
                        <i className="material-icons">person</i>
                        <span>Profile</span>
                    </div>
                    <div className="menu-item">
                        <i className="material-icons">assignment</i>
                        <span>Log</span>
                    </div>
                    <div className="menu-item">
                        <i className="material-icons">settings</i>
                        <span>Settings</span>
                    </div>
                    <div className="menu-item">
                        <i className="material-icons">exit_to_app</i>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
