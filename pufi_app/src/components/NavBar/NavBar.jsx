import React, {Component} from "react"
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    
    render(){
        
        return(
        <div className="nav-bar">
            <div className="logo">
                <Link to="/">
                <img src={logo} alt="logo"></img>
                </Link>
            </div>
            <div className="navigation">
                <a href="#puff">
                    <div className="br">
                        <p>PUFI PUFF</p>                        
                    </div>                                                       
                </a>                
                <a href="#rain">
                    <div className="br">
                        <p>PUFI RAIN</p>                        
                    </div>              
                </a>                
                <a href="#cart">
                    <div className="br">
                        <p>PUFI CART</p>                        
                    </div>                                    
                </a>
                <a href="#nap">
                    <div>
                        <p>PUFI NAP</p>
                    </div>                
                </a>
            </div>
            <div className="acount">
                <p className="br">MI CUENTA</p>
                <p>MI COMPRA</p>
            </div>                       
        </div>)
    }
}