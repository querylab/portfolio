import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';

import '../node_modules/font-awesome/css/font-awesome.min.css'; 
{/*La Libreria de arriba la declare para poder utilizar los iconos para el landing page*/}


ReactDOM.render(
  <BrowserRouter>
<App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
