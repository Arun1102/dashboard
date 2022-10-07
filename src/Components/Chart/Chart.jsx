import React from 'react'
import './Chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
function Chart() {

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
    <div className='Chart'>
   
      
      
      <span>Last 6 Months(Revenue)</span>
      <AreaChart width={1545} height={350} data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        
      </defs>
      <XAxis dataKey="name" />
      
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
      
    </AreaChart>
      
    </div>
    
  )
}

export default Chart