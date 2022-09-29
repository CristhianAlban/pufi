import { Link } from 'react-router-dom'
import {openModal} from "../../redux/actions"
import { useDispatch,} from 'react-redux';




export default function ProductL({name, img}) {
    const data={
        product:"Pufi "+name
    }
    const link=`/product/${name}`
    const dispatch= useDispatch();
    const onClick = ()=>{
        dispatch(openModal(data))
    }
    return (
        <div className="product_box">
            <div className={"product_img_" + name.toLowerCase()} >
                <Link to={link}>
                <input className="boton" type="button" value="SHOP"></input> 
                </Link>                
            </div>
            <div className='product_description'>
                <img src={img} alt="img"></img>
                <h1>{data.product}</h1>
                <h6 className='br_top'>_____</h6>
                <p> Descripcion del producto. este es un texto simulado</p>                
                <button onClick={onClick}> &gt; VER MAS</button>                 
            </div>            
        </div>
    )
}