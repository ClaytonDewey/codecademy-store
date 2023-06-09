import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app/App.js';
import './index.css';
// Import the store here.
import { store } from './app/store.js';

// Pass state and dispatch props to the <App /> component.
const root = ReactDOM.createRoot(document.getElementById('root'));
const render = () => {
  root.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch} />
    </React.StrictMode>
  );
};
render();

// Subscribe render to the store.
store.subscribe(render);
