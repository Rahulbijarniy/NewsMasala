import React from 'react'
import { Link } from "react-router-dom";

const NavBar = ()=>{

        return (
            <div>
                <nav className=" navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <Link className="navbar-brand"to="/">NewsMasala</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link" style={{color: 'red'}} aria-current="page"to="/">Home</Link>
        </li>
       
        <li className="nav-item">
        <Link className="nav-link" style={{color: 'thistle'}} to="/business">Business</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" style={{color: 'violet'}} to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" style={{color: 'green'}} to="/health"> Health</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" style={{color: 'turquoise'}} to="/science">Science</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" style={{color: 'yellow'}} to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" style={{color: 'blue'}} to="/technology">Technology</Link>
        </li>
       
                 </ul>
     
                 </div>
              </div>
               </nav>
            </div>
        )
    
}
export default NavBar