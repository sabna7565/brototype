import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import car1 from '../../../images/home/calicut2.jpeg'


 const Carous = () => {
  return (
    <div>
      <div style={{ display: 'block', width: '1000'}}>
          
          <Carousel>
         

              <Carousel.Item interval={1000}>
            <img
              className="d-block" height={500} width={1500}
              src={car1}
              alt=""
            /> 

            <Carousel.Caption style={{ color: "white" }}>
                        <h3>
                             sabna
                        </h3>
                     
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
            <img
              className="d-block" height={500} width={1500}
              src={car1}
              alt=""
            /> 

            <Carousel.Caption style={{ color: "white" }}>
                        <h3>
                             sabna
                        </h3>
                     
                  </Carousel.Caption>
              </Carousel.Item> <Carousel.Item interval={1000}>
            <img
              className="d-block" height={500} width={1500}
              src={car1}
              alt=""
            /> 

            <Carousel.Caption style={{ color: "white" }}>
                        <h3>
                             sabna
                        </h3>
                     
                  </Carousel.Caption>
              </Carousel.Item>

          </Carousel>
      </div>
          </div>
             
  )
}



export default Carous
