import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

const Init = () => (
  <h1>Hello World</h1>
)


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Init),
    document.getElementById('mount')
  );
});
