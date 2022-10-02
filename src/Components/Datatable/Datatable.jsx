import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import "./Datatable.scss"
import {columns, rows} from '../../Data';

function Datatable() {


  return (
    <div className='Datatable'>
    
      <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>  
      
    </div>
  )
}

export default Datatable