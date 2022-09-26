import React from 'react'
import './Featured.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
function featured() {
  return (
    <div className='feature'>
        <div className="wrapper">
          <div className="tabbar">
            <p className='title'>Total Revenue</p>
            <MoreVertIcon className='icons'/>
          </div>
         
          <div className="top">  
            <CircularProgressbar className='chartss' value={70} text={"70%"} strokeWidth={5}/>
            <span className='descrip'>Total sales made today</span>
            <span className='amount'>$290</span>
            <span className='tips'>Previous transaction proceesing and may not be included.</span>
          </div>
          <div className="bottom">
            
            <div className="bottomwid">
             <span>Targets</span>
              <div className="values red">
                <KeyboardArrowDownIcon/>
                <span>$25.4</span>
              </div>
            </div>
            <div className="bottomwid">
             <span>Monthly</span>
              <div className="values green">
                <KeyboardArrowUpIcon/>
                <span>$25.4</span>
              </div>
            </div>
            <div className="bottomwid">
             <span>Yearly</span>
              <div className="values green">
                <KeyboardArrowUpIcon/>
                <span>$25.4</span>
              </div>
            </div>
              
          </div>
        </div>
        
    </div>
  )
}

export default featured