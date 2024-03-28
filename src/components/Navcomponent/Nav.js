import React, { useState  , useContext} from "react";
 import {Link  , useNavigate } from 'react-router-dom';
import "./Nav.css"
import { Usercontext } from "../../contexts/context";

const Nav =() =>{

  const {login , setLogin}  = useContext(Usercontext)

  const navigate = useNavigate();

  const logout = () =>{
    localStorage.removeItem("token");
    setLogin(false)
    navigate('/login');
  }

  const loginfun = () =>{
    navigate('/login');
  }
 
  const Signup =()=>{
    navigate('/signup')
  }
  console.log(login)
    return(

        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-color py-3 position-fixed top-0">
        <div className="container">
          <a className="navbar-brand w-10 "  ><i className="fa-solid fa-mug-hot fa-2xl"></i></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link active fs-5 text-white" to="/" >Home</Link>
              </li>
              
              
            
              
            </ul>
           
           
            {login && <button className="Logout-btn px-4 py-2  text-white fs-6" onClick={logout}  > Log Out</button>}
            {!login && <button className="Logout-btn px-4 py-2  text-white fs-6" onClick={loginfun}   > Log In </button>} 
            <button className="Logout-btn px-4 py-2  text-white fs-6" onClick={Signup}  > Sign up </button>
    
        
          </div>
        </div>
      </nav>

    )
}

export default Nav