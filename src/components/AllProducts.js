import {React,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import json from "../data/stackline_frontend_assessment_data_2021.json";
import { fetchdata } from '../redux/productReducer.js';
import SingleProduct from "./SingleProduct"

function ProductContainer(){
    var productData = useSelector((state) => state.product);
    const dispatch = useDispatch();
    var data = json[0];
    useEffect(()=>{
        dispatch(fetchdata(data));

        },[])
    const tags = productData["productData"].tags ? 
    (productData["productData"].tags.map( tag => {
            return <span className="tags">{tag}</span>;
          })
    ) : (
        <span />
      );

      const alt = productData["productData"].title
      ? productData["productData"].title + " image"
      : "No image"; 
    return(
       <SingleProduct
        src={productData["productData"].image}
        title={productData["productData"].title}
        subtitle={productData["productData"].subtitle}
        tags={tags}
        alt={alt}
      />
    ) 
}
export default ProductContainer;

