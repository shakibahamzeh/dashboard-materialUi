import React,{useState} from 'react';
import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../helper/dummyData';
import { Link } from 'react-router-dom';

const UserList = () => {
    const[data,setData]=useState(userRows);

    const handleDelete = (id) =>{
       setData(data.filter(item => item.id !== id))
    }

    const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'user', headerName: 'User', width: 210 , renderCell:(params)=>{
      return(
          <div className="userListUser">
              <img src={params.row.avatar} alt="user" className="userListImg"/>
              {params.row.userName}
          </div>
      )
  } },
  { field: 'email', headerName: 'Email', width: 220 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
  },
  {
    field: 'transaction',
    headerName: 'Transaction',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
      field:'action',
      headerName:'Action',
      width:150,
      renderCell:(params)=>{
          return(
              <div className="userListAction">
                  <Link to={"/user/" + params.row.id}>
                    <button className="userListEdit">Edit</button>
                  </Link>
                  <DeleteOutlineIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
              </div>
          )
      }
  }
];



  return (
      <div className="userList">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[5]}
          checkboxSelection
         />
      </div>
  )
}

export default UserList; 
