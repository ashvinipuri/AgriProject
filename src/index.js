import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css';
import App from './App';
import { Route, RouterProvider } from 'react-router-dom';
import route from './route';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={route}/>)


