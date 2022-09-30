import React from "react"
import { connect } from "react-redux"
import { Component } from "react"
import { getProduct } from "../../redux/actions"
import NavBarShop from "../NavBar/NavBarShop"
import Footer from "../Footer/Footer"

export class CountryDetail extends Component{
    componentDidMount(){
        const name=this.props.match.params.name
        this.props.getProduct(name)
    }
    componentDidUpdate(){
        const name=this.props.match.params.name
        this.props.getProduct(name)
    }
    render(){
        const name=this.props.name
        console.log(name)      
        return(
            <div>
                <NavBarShop/>
                <div className="shop">
                    <h3>Estás interezado en comprar nuestro producto</h3>
                    <h1>PUFI {name}</h1>
                </div>
                <Footer/>
            </div>
        )
    }
}
export const mapStateToProps = (state)=>{
    return {
        name:state.name        
    }
}
export const mapDispatchToProps= (dispatch)=>{
    return{
        getProduct: name => dispatch(getProduct(name))        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail)



