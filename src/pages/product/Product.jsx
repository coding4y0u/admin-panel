import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import "./product.scss";
import { productData } from "../../dummyData";
import { Publish } from "@mui/icons-material";

export default function Product() {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newProduct'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopLeft'>
          <Chart data={productData} dataKey='Sales' title='Sales Performance' />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img
              src='/images/apple-air.jpg'
              alt=''
              className='productInfoImg'
            />
            <span className='productName'>Apple Airpods</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>79</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>sales:</span>
              <span className='productInfoValue'>4679</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>active:</span>
              <span className='productInfoValue'>yes</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfoValue'>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label htmlFor=''>Product Name</label>
            <input type='text' placeholder='Apple Airpods' />
            <label htmlFor=''>In Stock</label>
            <select name='inStock' id='idStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label htmlFor=''>Active</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img
                src='/images/apple-air.jpg'
                alt=''
                className='productUploadImg'
              />
              <label for='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: "none" }} />
            </div>
            <button className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
