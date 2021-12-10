import React from 'react';
import './App.css';
import ActionBar from './Components/ActionBar';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';

function App() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    console.log("mobile device");
  }else{
    // false for not mobile device
    console.log("not mobile device");
  }

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
