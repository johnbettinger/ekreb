import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.render(<App />, document.getElementById('otherRoot'));

root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );