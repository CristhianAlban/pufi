import React, {Component} from "react"
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    
    render(){
        
        return(
        <div className="nav-bar">
            <div className="logo">
                <img src={logo} alt="logo"></img>
            </div>
            <div className="navigation">
                <Link to="/">
                    <div className="br">
                        <p>PUFI PUFF</p>
                        
                    </div>                                                       
                </Link>                
                <Link to="/">
                    <div className="br">
                        <p>PUFI RAIN</p>
                        
                    </div>              
                </Link>                
                <Link to="/">
                    <div className="br">
                        <p>PUFI CART</p>                        
                    </div>                                    
                </Link>
                <Link to="/">
                    <div>
                        <p>PUFI NAP</p>
                    </div>                
                </Link>
            </div>
            <div className="acount">
                <p className="br">MI CUENTA</p>
                <p>MI COMPRA</p>
            </div>                       
        </div>)
    }
}