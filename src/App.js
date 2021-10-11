import React from 'react';
import './App.css';
import ActionBar from './Components/ActionBar';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="app">
      {/* ActionBar .2*/}
      <ActionBar />
      {/* Main .5*/}
      <Main />
      {/* Sidebar .3*/}
      <Sidebar />
    </div>
  );
}

export default App;
