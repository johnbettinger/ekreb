import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const root = ReactDOM.render(<App />, document.getElementById('other-root'));

root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );