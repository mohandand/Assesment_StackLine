import { LineChart, Line, XAxis, Tooltip } from "recharts";
import {useSelector} from "react-redux";

function ChartContainer() {
var productData = useSelector((state) => state.product);
    return (
      <div id="chart">
        <LineChart width={900} height={400} data={productData["productData"].sales}>
          <XAxis  dataKey="weekEnding" interval={4}/>
          <Tooltip />
          <Line type="monotone" dataKey="retailSales" stroke="#40a8ef" />
          <Line type="monotone" dataKey="wholesaleSales" stroke="#3c4858" />
        </LineChart>
      </div>
    );
}

export default ChartContainer;
