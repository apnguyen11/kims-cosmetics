import React, { Component } from 'react'
import M from 'materialize-css'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    componentDidMount(){
        M.AutoInit();
        
    }

    render() {
        return (
           <div className="navbar-fixed">
            <ul id="dropdown1" className="dropdown-content">
                <li href="#!"><Link to="/cosmetics">Cosmetics</Link></li>
                <li className="divider"></li>
                <li href="#!"><Link to="/herbal">Herbal Supplements</Link></li>
                <li className="divider"></li>
                <li href="#!"><Link to="/toys"> Toys</Link></li>
            </ul>     
            <nav>
                <div className="nav-wrapper">
                    <a style={{paddding:"50px"}} className="right brand-logo kimscosmetics"> <Link to="/about">KIM'S COSMETICS  <img style={{height: "50px", paddingLeft: "7px", paddingTop: "20px", marginBottom: "-3px"}} src="https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/cosmetics.svg?alt=media&token=93abf30b-3453-4dc1-9e15-3cc00d341785"></img></Link></a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Products<i className="material-icons right">arrow_drop_down</i></a></li>
                            <li><Link to='/contact'>Location/Hours</Link></li>
                            <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>
            </div>
        )
    }
}
