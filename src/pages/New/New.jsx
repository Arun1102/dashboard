import React,{useState} from 'react'
import './New.scss'
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';


function New({input,title}) {

  const [file,setFile] = useState("")
  console.log(file);
  return (
    <div className='New'>
      <Sidebar/>
      
      <div className="top">
        <Navbar/>
          <div className="titles">
              <span>{title}</span>
          </div>

          <div className="container">
            <div className="left">
            
              <img className='left-image' src={file ? URL.createObjectURL(file):"https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"} alt="" />
            </div>
            <form>
              <div className="middleupload">
                  <label htmlFor='file'>
                    <span >Upload:</span>
                    <DriveFolderUploadIcon />
                    </label>
                    <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}></input>
              </div>

              <div className="middle">
               
              {input.map((inputs)=>(
                <div className="middlename">
                  <label>{inputs.label}</label>
                  <input type={inputs.type} placeholder={inputs.placeholder}/>
                </div>
              ))  }
                {/* <div className="middlephone">
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
                </div> */}
               
                <button className='buttonny'>Submit</button>
              </div>

              </form>
               
          </div>
      </div>
      
        	
      
    </div>
  )
}

export default New