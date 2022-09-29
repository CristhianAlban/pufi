import React, {Component} from "react"
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

export default class NavBarShop extends Component {
    
    render(){
        
        return(
        <div className="nav-bar">
            <div className="logo">
                <Link to="/">
                <img src={logo} alt="logo"></img>
                </Link>
            </div>
            <div className="navigationB">
                <Link to="/">
                    <div>
                        <p>HOME</p>                        
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