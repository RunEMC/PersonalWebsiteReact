import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Counter from './Counter';
import App from './Components/App';

const Init = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Init),
    document.getElementById('mount')
  );
});
