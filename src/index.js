import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import AddMovie from './component/AddMovie';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/AddMovie" element={<AddMovie/>} />
      
      </Routes>
    </BrowserRouter>
  );
