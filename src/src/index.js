import './index.css';
import './animations.css';
import './box.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configStore } from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={configStore()}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
