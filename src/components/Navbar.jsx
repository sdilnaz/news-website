import React from 'react'
import logo from '../assets/tengriLogo.png'


const Navbar = ({setCategory}) => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={logo} style= {{ width:"250px"}} alt="TENGRI NEWS" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("general")}>NEWS</div>
                </li>
                <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("entertainment")}>LIFE</div>
                </li>
                <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("sports")}>SPORT</div>
                </li>
                <li className="nav-item">
                <div className="nav-link"onClick={()=>setCategory("science")}>EDU</div>
                </li>
                <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("technology")}>TECHNOLOGY</div>
                </li>
                <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("health")}>HEALTH</div>
                </li>
            
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar