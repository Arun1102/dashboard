import React from 'react'
import './New.scss'
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
function New() {
  return (
    <div className='New'>
      <Sidebar/>
      
      <div className="top">
        <Navbar/>
          <div className="titles">
              <span>Add New User</span>
          </div>

          <div className="container">
            <div className="left">
            
              <img className='left-image' src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw0b303b51/images/page-designer/2022/august_2/14390_Comp_E_Image1.jpg?sw=991&sfrm=jpg" alt="" />
            </div>
            <form>
              <div className="middleupload">
                    <span>Image:</span>
                    <DriveFolderUploadIcon/>
              </div>

              <div className="middle">
               
                
              
                <div className="middlename">
                  <label>Name and surname</label>
                  <input type="text" placeholder='Name'/>
                </div>

                <div className="middlephone">
                  <label>Phone</label>
                  <input type="text" placeholder='Phone No'/>
                </div>

                <div className="middleaddress">
                  <label>Address</label>
                  <input type="text" placeholder='Address'/>
                </div>

                <div className="rightname">
                  <label>Username</label>
                  <input type="text" placeholder='Name'/>
                </div>

                <div className="rightemail">
                  <label>Email</label>
                  <input type="text" placeholder='email'/>
                </div>

                <div className="rightpassword">
                  <label>Password</label>
                  <input type="text" placeholder='password'/>
                </div>

                <div className="rightcountry">
                  <label>Country</label>
                  <input type="text" placeholder='USA'/>
                </div>
               
                <button className='buttonny'>Submit</button>
              </div>
              </form>
               
          </div>
      </div>
      
        	
      
    </div>
  )
}

export default New