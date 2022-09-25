import React from 'react'
import './Widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
function Widget() {
  return (
    <div className='Widget'>
        <div className="wrapper">
            <div className="left">
                <span className='title'>Users</span>
                <span className='counter'>21312</span>
                <span className='link'>See all users</span>
                {/* <hr/> */}
            </div>
            <div className="right">
                <div className="rightup">
                    <KeyboardArrowUpIcon className='icon red'/>
                    <div className="percentage red">20 %</div>
                </div>
                <div className="rightdown">
                    <PermIdentityIcon className='icon'/>
                    {/* <div className="percentage">20 %</div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Widget