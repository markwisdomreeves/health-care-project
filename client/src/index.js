import React from 'react';
import ReactDOM from 'react-dom';
import DataProvider from "./redux/store"
import './index.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <DataProvider>
      <App />
    </DataProvider>,
  document.getElementById('root')
);
