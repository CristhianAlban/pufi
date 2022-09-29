import React, {Component} from "react"
//import {connect} from 'react-redux'

import NavBar from "../NavBar/NavBar"
import ControlledCarousel from "../Carousel/Carousel"
import RainCard from "../Products/Rain"
import PuffCard from "../Products/Puff"
import CartCard from "../Products/Cart"
import NapCard from "../Products/Nap"
import InstagramCard from "../Instagram/Instagram"
import Newsletter from "../Newsletter/Newsletter"
import Footer from "../Footer/Footer"


export default class Home extends Component {
    
    render(){        
        return(
        <div className="box">
            <NavBar/>
            <ControlledCarousel/>
            <RainCard/>
            <PuffCard/>
            <CartCard/>
            <NapCard/>
            <InstagramCard/>
            <Newsletter/>
            <Footer/>                              
        </div>)
    }
}

// export const mapStateToProps = (state)=>{

// }

// export const mapDispatchToProps= (dispatch)=>{
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home)
