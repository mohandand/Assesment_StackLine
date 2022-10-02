import React from "react";
import {useSelector,useDispatch} from "react-redux";

const Table = props => {
  var productData = useSelector((state) => state.product);

  return (
    <div id="table">
      <table>
        <thead>
          <tr>
            <th scope="col" onClick={() => props.sortdata("weekEnding")}>
              <div>
                WEEK ENDING
                <span className="arrowIcon"> {props.icon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortdata("retailSales")}>
              <div>
                RETAIL SALES <span className="arrowIcon">{props.icon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortdata("wholesaleSales")}>
              <div>
                WHOLESALE SALES <span className="arrowIcon">{props.icon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortdata("unitsSold")}>
              <div>
                UNITS SOLD <span className="arrowIcon">{props.icon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortdata("retailerMargin")}>
              <div>
                RETAILER MARGIN <span className="arrowIcon">{props.icon}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>{props.rows}</tbody>
      </table>
    </div>
  );
};

export default Table;
