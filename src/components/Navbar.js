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
                <li><a class="nav-link" href="#!">Cosmetics</a></li>
                <li className="divider"></li>
                <Link href="#!" to="/herbal"><li><a href="#!">Herbal Supplements</a></li></Link>
                <li className="divider"></li>
                <li><a href="#!">Toys</a></li>
            </ul>
            
            <nav>
                <div className="nav-wrapper">
                
                    <a className="kimscosmetics" href="sass.html" className="right brand-logo">KIM'S COSMETICS</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Products<i className="material-icons right">arrow_drop_down</i></a></li>
                            <li><Link to='/contact'>Contact/Location</Link></li>
                            <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>
            </div>
        )
    }
}
