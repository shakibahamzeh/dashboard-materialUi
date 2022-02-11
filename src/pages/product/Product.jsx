import React from 'react';
import "./product.css";
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../helper/dummyData';
import AirPods from "../../assets/AirPods.jpg";
import PublishIcon from '@mui/icons-material/Publish';


const Product = () => {
  return (
    <div className="product">
     <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
     </div>
     <div className="productTop">
         <div className="productTopLeft">
           <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
         </div>
         <div className="productTopRight">
             <div className="productTopInfo">
                 <img src={AirPods} alt="airPod" className="productTopImg"/>
                 <span className="productName">Apple AirPods</span>
             </div>
        <div className="productBottomInfo">
            <div className="productInfoItem">
               <span className="productInfoKey">Id:</span>
               <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
               <span className="productInfoKey">Sales:</span>
               <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Active:</span>
              <span className="productInfoValue">Yes</span>
            </div>
            <div className="productInfoItem">
               <span className="productInfoKey">In Stock:</span>
              <span className="productInfoValue">No</span>
            </div>
        </div>
         </div>
     </div>
    
    <div className="productBottom">
        <form className="productForm">
           <div className="productFormLeft">
               <label>Product</label>
               <input type="text" placeholder="Apple AirPods"/>
               <label>In Stock</label>
               <select name="inStock" id="inStock">
                   <option value="yes">Yes</option>
                   <option value="no">No</option>
               </select>
               <label>Active</label>
               <select name="active" id="active">
                   <option value="yes">Yes</option>
                   <option value="no">No</option>
               </select>
           </div>
           <div className="productFormRight">
               <div className="productUpload">
                   <img src={AirPods} alt="airPods" className="productUploadImg" />
                   <label for="file">
                      <PublishIcon className=""/>
                   </label>
                   <input type="file" id="file" style={{display:"none"}}/>
               </div>
               <button className="productButton">Update</button>
           </div>
        </form>
    </div>
    </div>
  )
}

export default Product;