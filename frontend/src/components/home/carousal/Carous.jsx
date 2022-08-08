// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import Carousel from 'react-bootstrap/Carousel';
// import car1 from '../../../images/home/calicut2.jpeg'
// import car2 from '../../../images/home/calicut5.jpeg'
// import car3 from '../../../images/home/calicut4.jpeg'
// import car4 from '../../../images/home/calicut3.jpeg'

// import './Carous.scss'

//  const Carous = () => {
//   return (
//     <div className="carous">
//       <div style={{ display: 'block', width: '1000'}}>
          
//           <Carousel>
         

//               <Carousel.Item interval={3000} >
//                 <div style={{display: 'flex'}}>
//             <img
//               className="d-block" height={600} width={1000}
//               src={car1}
//               alt=""
//             /> 
//             <img
//               className="d-block" height={600} width={1000}
//               src={car1}
//               alt=""
//             />
//              <img
//             className="d-block" height={600} width={1000}
//             src={car1}
//             alt=""
//           /> </div>

//             <Carousel.Caption style={{ color: "white" }} className="namediv">
//                         <h3 className="content">
//                              sabna
//                         </h3>
                     
//                   </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item interval={3000}>
//             <img
//               className="d-block" height={600} width={1000}
//               src={car3}
//               alt=""
//             /> 

//             <Carousel.Caption className="namediv">
//                         <h3 className="content">
//                              sabna
//                         </h3>
                     
//                   </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item interval={3000}>
//             <img
//               className="d-block" height={600} width={1000}
//               src={car2}
//               alt=""
//             /> 

//             <Carousel.Caption style={{ color: "white" }} className="namediv">
//                         <h3 className="content">
//                              sabna
//                         </h3>
                     
//                   </Carousel.Caption>
//               </Carousel.Item>

//           </Carousel>
//       </div>
//           </div>
             
//   )
// }



// export default Carous




import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '@material-ui/core/Container';
import car1 from '../../../images/home/calicut2.jpeg'
import car2 from '../../../images/home/calicut5.jpeg'
import car3 from '../../../images/home/calicut4.jpeg'
import car4 from '../../../images/home/calicut3.jpeg'
import data from './data'
import './Carous.scss'
const settings = {
  autoplay: true,
  autoplaySpeed: 1000,
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  speed: 1500,
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
<Slider {...settings} style={{paddingTop: '5px'}}>
  {data&&data?.map(item => (
    <div style={{ marginTop: "3rem" }} className="card">
      <div className="card-top">
        <img style={{width: '300px', height: '350px', marginTop: '70px'}} src={item.linkImg} alt="sadfas" />
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

