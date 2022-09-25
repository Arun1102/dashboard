import React from 'react'
import './Home.scss';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';

function Home() {
  return (
    <div className='Home'>
     <Sidebar/>
     <div className="content">
      <Navbar/>
      <div className="widgets">
        
      </div>
     </div>
     
    </div>
  )
}

export default Home