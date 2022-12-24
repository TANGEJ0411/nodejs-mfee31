import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useEffect,useState} from 'react'
import Navbar from './components/Navbar';
import Stock from './components/Stock';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import StockDetails from './components/StockDetails';
import NotFound from './components/NotFound';
import axios from 'axios';

function App() {
  const [stockId ,setStockId]=useState('');
  const [stocks,setStocks]=useState([]);
  useEffect(() => {
    // 在 component 初始化的時候跑一次
    // 通常會把去跟後端要資料的動作放在這裡
    async function getStocks() {
      let response = await axios.get('http://localhost:3001/api/stocks');
      setStocks(response.data);
    }
    getStocks();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Stock Stock={stocks} setStockId={setStockId}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stock/:stockId" element={<StockDetails stock={stocks}/>}>
          <Route path=":currentPage" element={<StockDetails stock={stocks}/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
