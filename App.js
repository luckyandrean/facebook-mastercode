import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Login from './components/Login/Login';
import { useStateValue } from './State/StateProvider';
import SidebarRight from './components/SidebarRight/SidebarRight';


function App() {

  
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      { !user ? (
        <Login />
      ) : (
        <>
          <Header/>
          <div className="appBody">
            <Sidebar />
            <Feed />
            <SidebarRight />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
