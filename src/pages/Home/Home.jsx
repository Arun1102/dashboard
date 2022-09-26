import React from 'react'
import './Home.scss';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Widget from '../../Components/Widget/Widget';
import Featured from '../../Components/Featured/Featured';
import Chart from '../../Components/Chart/Chart';
import Charts from '../../Components/Chart/Chart';
function Home() {
  return (
    <div className='Home'>
     <Sidebar/>
     <div className="content">
      <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="container">
          <div className="featured">
            <Featured/>
          </div>
          <div className="charts">
            <Chart/>
           
          </div>
        </div>
      
     </div>
     
    </div>
  )
}

export default Home