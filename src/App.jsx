import React from 'react';
import './App.css';
import { router } from './Pages/index.js'
// import { RouterProvider } from 'react-router-dom'
import { store } from './Store/store.js'
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <p>hola mundo</p>
    </div>
  );
}

export default App;
