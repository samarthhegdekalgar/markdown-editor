import * as React from 'react';
import * as ReactDom from 'react-dom'
import './index.css';
import App from './app';
import './shim';

ReactDom.render(<App />, document.getElementById('root'));
