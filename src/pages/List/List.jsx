import React from 'react'
import './List.scss'
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Datatable from '../../Components/Datatable/Datatable';
function List() {
  return (
    <div className='List'>
      <Sidebar/>
      <div className="listcontainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List