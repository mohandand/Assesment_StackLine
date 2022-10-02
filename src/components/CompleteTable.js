import {React} from "react";
import {useSelector,useDispatch} from "react-redux";
import { sortdata, } from '../redux/productReducer.js';
import Table from "./Table"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


function TableContainer(){
    var productData = useSelector((state) => state.product);
    const dispatch = useDispatch();

    function sortdataa(key) {
      dispatch(sortdata(key));
      }

    const rows = productData["productData"].sales ? (
        productData["productData"].sales.map((row,index) => {
          return (
            <tr key={index}>
              <td>{row.weekEnding.toLocaleString()}</td>
              <td>{"$" + row.retailSales.toLocaleString()}</td>
              <td>{"$" + row.wholesaleSales.toLocaleString()}</td>
              <td>{row.unitsSold.toLocaleString()}</td>
              <td>{"$" + row.retailerMargin.toLocaleString()}</td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td rowSpan="5">No data to display</td>
        </tr>
      );

    const arrowIcon = <FontAwesomeIcon icon={faCaretDown} />;
   
    return(
        <Table rows={rows} sortdata={sortdataa} icon={arrowIcon}/>
    ) 
}
export default TableContainer;