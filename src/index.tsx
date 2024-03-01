import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from 'Components/Home/Home';
import TodoProvider from 'Provider/To-do.provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoProvider>
      <Home />
    </TodoProvider>
  </React.StrictMode>
);