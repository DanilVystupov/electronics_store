import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserStore from './store/UserStore';
import TypeStore from './store/TypeStore';
import DeviceStore from './store/DeviceStore';
import BrandStore from './store/BrandStore';
import PaginationStore from './store/PaginationStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    type: new TypeStore(),
    device: new DeviceStore(),
    brand: new BrandStore(),
    page: new PaginationStore(),
  }}>
    <App />
  </Context.Provider>
);