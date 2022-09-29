import logo from '../../images/logoBlack.png'
import img from '../../images/comprasegura.png'
import logo2 from '../../images/brandlive.png'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import instagram from '../../images/instagram.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='top'>
                <div className="logo_black">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className='products_footer'>
                    <Link to="/product/PUFF">
                        <div>
                            <p>PUFI PUFF</p>
                        </div>                                    
                    </Link>
                    <Link to="/product/RAIN">
                        <div>
                            <p>PUFI RAIN</p>
                        </div>                
                    </Link>
                    <Link to="/product/CART">
                        <div>
                            <p>PUFI CART</p>
                        </div>                                    
                    </Link>
                    <Link to="/product/NAP">
                        <div>
                            <p>PUFI NAP</p>
                        </div>                
                    </Link>
                </div>
                <div className='about'>
                    <Link to="/">
                        <div>
                            <p>CONTACTO</p>
                        </div>                                    
                    </Link>
                    <Link to="/">
                        <div>
                            <p>AYUDA</p>
                        </div>                
                    </Link>
                    <Link to="/">
                        <div>
                            <p>CÓMO COMPRAR</p>
                        </div>                                    
                    </Link>
                    <Link to="/">
                        <div>
                            <p>TÉRMINOS & CONDICIONES</p>
                        </div>                
                    </Link>                
                </div>
                <div className='compra_segura'>
                    <p>COMPRA 100% SEGURA</p>
                    <img src={img} alt="img"></img>
                </div>
                <div className='redes'>
                    <p>SEGUINOS EN </p>
                    <img src={facebook} alt="img"></img>
                    <img src={twitter} alt="img"></img>
                    <img src={instagram} alt="img"></img>
                </div>
            </div>
            <div className='bto'>
                <p>PUFI Copyright 2017 - Todos los derechos reservados</p>
                <img src={logo2} alt="img"></img>
            </div>
        </div>
    )
}