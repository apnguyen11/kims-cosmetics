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
                    <a className="kimscosmetics" className="right brand-logo"> <Link to="/about">KIM'S COSMETICS</Link></a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Products<i className="material-icons right">arrow_drop_down</i></a></li>
                            <li><Link to='/contact'>CONTACT/LOCATION</Link></li>
                            <li><Link to="/about">ABOUT</Link></li>
                    </ul>
                </div>
            </nav>
            </div>
        )
    }
}
