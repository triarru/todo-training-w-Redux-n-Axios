import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './app/store';
import store from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
// import userEvent from '@testing-library/user-event'


// chuyển phần tử DOM cho createRoot 
const container = document.getElementById('root');
const root = createRoot(container); 

// chuyển các phẩn tử react cho root.render
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
