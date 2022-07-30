import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import car1 from '../../../images/home/calicut2.jpeg'
import car2 from '../../../images/home/calicut5.jpeg'
import car3 from '../../../images/home/calicut4.jpeg'
import car4 from '../../../images/home/calicut3.jpeg'
import './Placement.scss'


const Placement = () => {
return (
    <div className="carous">
        <div style={{ display: 'block', width: '1000'}}>
          
          <Carousel>
         

              <Carousel.Item interval={3000}>
            <img
              className="d-block" height={600} width={1000}
              src={car1}
              alt=""
            /> 

            <Carousel.Caption style={{ color: "white" }} className="namediv">
                        <h3 className="content">
                             sabna
                        </h3>
                     
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
            <img
              className="d-block" height={600} width={1000}
              src={car3}
              alt=""
            /> 

            <Carousel.Caption className="namediv">
                        <h3 className="content">
                             sabna
                        </h3>
                     
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
            <img
              className="d-block" height={600} width={1000}
              src={car2}
              alt=""
            /> 

            <Carousel.Caption style={{ color: "white" }} className="namediv">
                        <h3 className="content">
                             sabna
                        </h3>
                     
                  </Carousel.Caption>
              </Carousel.Item>

          </Carousel>
      </div>

    </div>
  )
}

export default Placement