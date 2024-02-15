import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Images
import "./Slider.scss"

// Assets
import Promo1 from '../../../assets/images/promo1.jpg'
import Promo2 from '../../../assets/images/promo2.png'
import Promo3 from '../../../assets/images/promo5.png'
import Promo4 from '../../../assets/images/promo4.png'

const Slider = () => {

  // Este arreglo contiene todas las imagenes que se muestrán en el carrusel
    const images = [
        { id: 1, src: Promo1 },
        { id: 2, src: Promo2 },
        { id: 3, src: Promo3 },
        { id: 4, src: Promo4 },
      ];

  return (
    <Carousel showStatus={false} showThumbs={false} infiniteLoop autoPlay interval={4000} className='Slider_'>
       {images.map((_, index) => (
          <div key={index} className='s-cntImage'>
            <img src={_.src} alt="" className='s-img' />
          </div>
      ))}
    </Carousel>
  )
}

export default Slider