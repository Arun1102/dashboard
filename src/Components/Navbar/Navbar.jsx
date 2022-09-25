import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.scss'
import SettingsIcon from '@mui/icons-material/Settings';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LanguageIcon from '@mui/icons-material/Language';
function Navbar() {
  return (
    <div className='Navbar'>
        <div className="wrapper">
            <div className="search">
                <input placeholder='search...'></input>
            <SearchIcon className='icons'/>
            </div>
           
           <div className="right">
                
                <LanguageIcon className='icons'/>
                <span>English</span>
                <DarkModeIcon className='icons'/>
                <ZoomInMapIcon className='icons'/>
                
                <div className="bellnotify">
                <NotificationsIcon className='icons'/>
                  <div className="item">
                    1
                  </div>
                </div>
                <div className="bellnotify">
                <ChatBubbleIcon className='icons'/>
                <div className="item">
                    1
                  </div>
                </div>
                <DensityMediumIcon className='icons'/>
                <img className='profilepic' src='https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png'/>
                <SettingsIcon className='icons'/>
           </div>
            
           

        </div>
    </div>
  )
}

export default Navbar