import React, {Component} from "react"
//import {connect} from 'react-redux'
import image from '../../images/image1.jpg'


export default class Home extends Component {
    
    render(){
        
        return(
        <div className="box">
            <h1>SITIO EN DESARROLLO</h1>
            <img className="image" src={image} alt="imagen"></img>                       
        </div>)
    }
}

// export const mapStateToProps = (state)=>{

// }

// export const mapDispatchToProps= (dispatch)=>{
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home)
