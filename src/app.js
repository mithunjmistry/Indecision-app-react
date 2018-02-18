import React from 'react';
import ReactDOM from 'react-dom';
// import InDecisionApp from './components/InDecision';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';



const appRoot = document.getElementById('app');
// ReactDOM.render(<InDecisionApp />, appRoot);
ReactDOM.render(<AppRouter />, appRoot);