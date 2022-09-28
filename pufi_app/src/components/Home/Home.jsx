import React, {Component} from "react"
//import {connect} from 'react-redux'
import styles from './Home.module.css'
import image from '../../images/image1.jpg'


export default class Home extends Component {
    
    render(){
        
        return(
        <div className={styles.box}>
            <h1>SITIO EN DESARROLLO</h1>
            <img className={styles.image} src={image} alt="imagen"></img>                       
        </div>)
    }
}

// export const mapStateToProps = (state)=>{

// }

// export const mapDispatchToProps= (dispatch)=>{
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home)
