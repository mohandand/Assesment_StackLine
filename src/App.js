import './App.css';
import AllProducts from "./components/AllProducts"
import CompleteTable from "./components/CompleteTable"
import Chart from "./components/Chart"

function App() {
  return (
    <div>
    <div className='headrer'><h1>STACKLINE</h1></div>
    <div className="container">
     <div className="product-container">
          <AllProducts />
        </div>
      <div className="stats">
        <div className="chart-container">
          <Chart />
        </div>
        <div className="table-container">
          <CompleteTable />
          </div>
        </div>
    </div>
    </div>
  );
}

export default App;
