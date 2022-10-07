import React from 'react';
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import {useState, useContext} from 'react';
import {DarkModeContext} from '../../ContextApi/DarkModeContext';

function Sidebar() {

    const {dispatch} = useContext(DarkModeContext)

  return (
    <div className='Sidebar'>
        <div className="top">
            <Link to='/' style={{textDecoration:"none"}}>
            <div className="logo">ArunDevAdmin</div>
            </Link>
        </div>
        <hr></hr>
        <div className="center">
            <ul>
                <p className='title'>MAIN</p>
                <li>
                    <DashboardIcon className='icons'/>
                    <span>Dashboard</span>
                </li>
                <Link to='/users' style={{textDecoration:"none"}}>
                <li>
                    <PersonOutlineIcon className='icons'/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to='/product' style={{textDecoration:"none"}}>
                <li>
                    <StorefrontIcon className='icons'/>
                    <span>Products</span>
                </li>
                </Link>
                <li>
                    <CreditCardIcon className='icons'/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className='icons'/>
                    <span>Delivery</span>
                </li>
                <p className='title'>USEFUL</p>
                <li>
                    <AssessmentIcon className='icons'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon className='icons'/>
                    <span>Notifications</span>
                </li>
                <p className='title'>SERVICE</p>
                <li>
                    <SettingsApplicationsIcon className='icons'/>
                    <span>System Health</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className='icons'/>
                    <span>Logs</span>
                </li>
                <li>
                <SettingsApplicationsIcon className='icons'/>
                    <span>Settings</span>
                </li>
                <p className='title'>USER</p>
                <li>
                    <LogoutIcon className='icons'/>
                    <span>Profile</span></li>
                <li>
                    <LogoutIcon className='icons'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
        <p className='title'>Theme</p>
            <div className="coloroptions" onClick={()=>dispatch({type:"LIGHT"})} ></div>
            <div className="coloroptions" onClick={()=>dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar