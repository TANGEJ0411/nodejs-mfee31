import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';


const Stock = (props) => {
  const [error, setError] = useState(null);
  const [stocks,setStocks]=useState([]);

  useEffect(()=>{
    const getStocks=async function() {
      let response =await axios.get('http://localhost:3001/api/stocks')
      // console.log(response.data)
      setStocks(response.data)
    }
    getStocks();
  },[]);
  
  return (
    <div>
      {error && <div>{error}</div>}
      <h2 className="ml-7 mt-6 text-xl text-gray-600">股票代碼</h2>
      {stocks.map((stock)=>{
        return(
      <div className="bg-white bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg m-6 cursor-pointer">
        <Link to={`/stock/${stock.id}`}>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">{stock.id}</h2>
          <p className="text-gray-700">{stock.name}</p>
        </Link>
      </div>
        )
})}
    </div>
  );
  
};

export default Stock;
