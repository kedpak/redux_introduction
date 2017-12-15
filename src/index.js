import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/App.js';
import { Provider } from {react-redux};
import store from './store';


ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
