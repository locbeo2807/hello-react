import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './pages/ToDoList';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Banhang from './components/Banhang';
import Shop from './pages/Shop';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     

        <App/>
      
    </BrowserRouter>
  
  </React.StrictMode>,
  )