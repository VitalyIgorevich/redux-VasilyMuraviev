import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import rootReduser from "./Redux/rootReduser"
import { Provider } from 'react-redux';

const store = createStore(rootReduser)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
    
  
);


