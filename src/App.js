import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        todo Redux
      </header>
    </div>
  );
}

export default App;
