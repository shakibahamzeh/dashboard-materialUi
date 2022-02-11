import React,{useState} from 'react';
import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from '../../helper/dummyData';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const[data,setData]=useState(productRows);

    const handleDelete = (id) =>{
       setData(data.filter(item => item.id !== id))
    }

    const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: 'Name', width: 210 , renderCell:(params)=>{
      return(
          <div className="productListUser">
              <img src={params.row.image} alt="product" className="productListImg"/>
              {params.row.name}
          </div>
      )
  } },
  { field: 'stock', headerName: 'Stock', width: 220 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
  },
  {
    field: 'price',
    headerName: 'Price',
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
              <div className="productListAction">
                  <Link to={"/product/" + params.row.id}>
                    <button className="productListEdit">Edit</button>
                  </Link>
                  <DeleteOutlineIcon className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>
              </div>
          )
      }
  }
];
  return (
    <div className="productList">
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

export default ProductList