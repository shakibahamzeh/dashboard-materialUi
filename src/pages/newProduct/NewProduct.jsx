import React from 'react';
import "./newProduct.css";

const NewProduct = () => {
  return (
    <div className="newProduct">
        <div className="newProductContainer">
            <h1 className="newProductTitle">New Product</h1>
            <form className="newProductForm">
                <div className="newProductUpload">
                 <label className="">Image</label>
                 <input type="file" />
               </div>
               <div className="newProductItem">
                 <label>Name</label>
                 <input type="text" placeholder="Apple AirPods" className="newUserInput"/>
               </div>
               <div className="newProductItem">
                 <label>Stock</label>
                 <input type="text" placeholder="123" className="newUserInput"/>
               </div>
               <div className="newProductItem">
                 <label>Active</label>
                 <select id="active" name="active">
                     <option>Yes</option>
                     <option>No</option>
                 </select>
               </div>
               <button className="newProductButton">Create</button>
            </form>
        </div>
    </div>
  )
}

export default NewProduct