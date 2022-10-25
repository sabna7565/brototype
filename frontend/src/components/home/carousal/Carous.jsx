

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '@material-ui/core/Container';
import car1 from '../../../images/home/calicut2.jpeg'
import car2 from '../../../images/home/calicut5.jpeg'
import car3 from '../../../images/home/calicut4.jpeg'
import car4 from '../../../images/home/calicut3.jpeg'
import car10 from '../../../images/home/staffs.jpg'
import data from './data'
import './Carous.scss'


const settings = {
  autoplay: true,
  autoplaySpeed: 1000,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  speed: 1000,
  slide: 'div',
  cssEase: 'block',

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
 const Carous = () => {
  return (
    <div className="carous">
      <Container>

{/* <h1 style={{marginTop: "2rem",marginBottom:"1rem"}} className="placeheading">Placements</h1> */}
<Slider {...settings} style={{paddingTop: '20px'}}>
  {data&&data?.map(item => (
    <div style={{ marginTop: "3rem" }} className="card">
      <div className="card-top">
        <img style={{width: '100%', height: '800px', marginTop: '70px'}} src={item.linkImg} alt="sadfas" />
      </div>
      <div className="card-bottom">
      <h4 className="heading3">{item.like}</h4>
    

      </div>
      
    </div> 
  ))}
</Slider>
</Container>
          </div>
             
  )
}



export default Carous

