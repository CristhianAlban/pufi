import React, {Component} from "react"
import {connect} from 'react-redux'
import {closeModal} from "../../redux/actions"
import NavBar from "../NavBar/NavBar"
import ControlledCarousel from "../Carousel/Carousel"
import ProductL from "../Products/ProductL"
import ProductR from "../Products/ProductR"
import img1 from '../../images/sombrilla.jpg'
import img2 from '../../images/puff.jpg'
import img3 from '../../images/cart.jpg'
import img4 from '../../images/nap.jpg'
import InstagramCard from "../Instagram/Instagram"
import Newsletter from "../Newsletter/Newsletter"
import Footer from "../Footer/Footer"
import Modal from "../Modal/Modal";



export  class Home extends Component {
    
    render(){        
        return(
        <div className="box">
            <Modal isOpen={this.props.isOpen} onClose={this.props.closeModal}>
                <h1> hola soy eun componente modal "reusable" y muestro el detalle de: {this.props.data.product}</h1>
            </Modal>
            <NavBar/>
            <ControlledCarousel/>
            <section id="rain">
                <ProductL
                name="RAIN"
                img={img1}
                />
            </section>
            <section id="puff">
                <ProductR
                name="PUFF"
                img={img2}
                />
            </section>
            <section id="cart">
                <ProductL
                name="CART"
                img={img3}
                />
            </section>
            <section id="nap">
                <ProductR
                name="NAP"
                img={img4}
                />
            </section>           
            <InstagramCard/>
            <Newsletter/>
            <Footer/>                              
        </div>)
    }
}

 export const mapStateToProps = (state)=>{
    return{
        isOpen:state.isOpen,
        data:state.data
    }
    


 }

 export const mapDispatchToProps= (dispatch)=>{
    return{        
        closeModal: ()=> dispatch(closeModal()),
    }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Home)
