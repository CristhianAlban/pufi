import img1 from '../../images/2.jpg'
import img2 from '../../images/3.jpg'
import img3 from '../../images/5.jpg'
import img4 from '../../images/6.jpg'
import img5 from '../../images/8.jpg'
import img6 from '../../images/10.jpg'

export default function InstagramCard() {
    return (
        <div className='box_instagram'>
            <h6>INSTAGRAM</h6>
            <h1>#ESPUFI</h1>
            <div className='box_fotos'>
                <img src={img1} alt="img1"></img>
                <img src={img2} alt="img1"></img>
                <img src={img3} alt="img1"></img>
                <img src={img4} alt="img1"></img>
                <img src={img5} alt="img1"></img>
                <img src={img6} alt="img1"></img>
            </div>
        </div>
    )
}