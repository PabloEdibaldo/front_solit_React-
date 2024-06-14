import React, { useEffect, useState } from 'react';
import { initGoogleAnalytics } from './assets/js/gogleAnalitics.js';
import { Link, useNavigate } from 'react-router-dom';
import AppRoutes from './Router.jsx';
import NavBar from './components/NavBar/Index.jsx';
import Login from './components/Login/Index.jsx';
import Sidelbar from './components/Sidebar/Sidebar.jsx';

import $ from 'jquery';
import './assets/js/app.min.js';
//import './assets/js/theme/default.min.js';






function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usuario, setUsuario] = useState([]);
  const handleLoginSuccess = (data) => {
    if (data) {
      setIsLoggedIn(data);
      navigate('/inicio')
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"));
      setUsuario(user);
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
    }
    initGoogleAnalytics();
  }, [isLoggedIn])
   
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
        rel="stylesheet"
      />
      <div
        id="page-container"
        className="fade page-sidebar-fixed page-header-fixed"
      >
        {isLoggedIn ? (
          <>
            <div id="header" className="header navbar-default">
              <NavBar />
            </div>
            <div id="sidebar" className="sidebar">
              <Sidelbar />
            </div>
          </>
        ) : (null)}

        <div id="content" class="content">
          {!isLoggedIn ? (<Login onLoginSuccess={handleLoginSuccess} />)
            :
            (<AppRoutes user={usuario} />)}
        </div>
        <a
          href="javascript:;"
          className="btn btn-icon btn-circle btn-success btn-scroll-to-top fade"
          data-click="scroll-top"
        >
          <i className="fa fa-angle-up" />
        </a>
      </div>
    </>
  )
}
export default App
