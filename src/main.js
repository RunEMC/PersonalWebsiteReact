import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

const Init = () => (
    <App />
)


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Init),
    document.getElementById('mount')
  );
});
