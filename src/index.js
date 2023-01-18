import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// React Hot Loading
if (module.hot) {
  module.hot.accept("./app/App", () => {
    const ReactApp = require("./app/App").default;
    ReactDOM.render(ReactApp);
  });
}