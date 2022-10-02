import React from 'react'
import './Single.scss'
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Table from '../../Components/Table/Table';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
function Single() {

  const data = [
    {
      name: 'January',
      total: 2100,
    },
    {
      name: 'February',
      total: 2200,
    },
    {
      name: 'March',
      total: 1100,
    },
    {
      name: 'April',
      total: 2400,
    },
    {
      name: 'May',
      total: 2800,
    },
    {
      name: 'June',
      total: 3100,
    },
    
  ];




  return (
    <div className='single'>
      <Sidebar/>
      <div className="singlecontainer">
      <Navbar/>
      <div className="top">
          <div className="profile">
           
            <div className="left">
              <span >Information</span>
              <img className='propic' src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            </div>
            <div className="right">
              <div className="text">
                <h3 className='title'>Jane Doe</h3>
                <span className='infos'>Email: arun@gmail.com</span>
                <span className='infos'>Phone: +12349859</span>
                <span className='infos'>Address:chicago american repucliv roads</span>
                <span className='infos'>Country: USA</span>
              </div>
              <div className="buttons">
                <button className='buttony'>Edit</button>
              </div>
            </div>
            
          </div>
          <div className="charts">
            <span>Last 6 Months(Revenue)</span>
                <AreaChart width={630} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                  </linearGradient>
                  {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                  </linearGradient> */}
                </defs>
                <XAxis dataKey="name" />
                {/* <YAxis /> */}
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                
              </AreaChart>
          </div>
      </div>
      <div className="bottom">
          <span>Last Transaction</span>
          <Table/>
      </div>
      </div>
      
      
    </div>
  )
}

export default Single