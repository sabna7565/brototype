import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '@material-ui/core/Container';
import * as api from '../../../api/home'
import { useEffect,useState } from 'react';

import car1 from '../../../images/home/calicut2.jpeg'
import car2 from '../../../images/home/calicut5.jpeg'
import car3 from '../../../images/home/calicut4.jpeg'
import car4 from '../../../images/home/calicut3.jpeg'
import './Placement.scss'
import data from './data'


 const Placement = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
  autoplaySpeed: 1500,
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

  const [Fulldata, setFulldata] = useState({loading:false,done:false})

    useEffect(() => {
        !Fulldata.done && fetchPlacements()
      }, [])
    
      const fetchPlacements = async()=>{
        setFulldata((prev)=>({ ...prev, loading: true}))
        try {
          const {data}=await api.viewPlacement();
          if (data?.placement) {
          setFulldata((prev)=>({
             ...prev,
             placement:data['placement'], 
             loading: false, 
             done: true}));
          }
        } catch (error) {
          console.log(error)
        }
      }
       console.log("important....", Fulldata.placement)
       let placements = Fulldata.placement ? Fulldata.placement : [];

return (
    <div className="hcarous">
        <Container>

<h1 style={{marginTop: "2rem",marginBottom:"1rem"}} className="placeheading">Placements</h1>
<Slider {...settings} style={{paddingLeft: '30px'}}>
  {placements?.map(item => (
    <div style={{ marginTop: "3rem" }} className="card">
      <div className="card-top">
        <img style={{width: '200px', height: '200px', marginTop: '70px'}} src={item.photo} alt="sadfas" />
      </div>
      <div className="card-bottom">
      <h4 className="heading3">{item.name}</h4>
      <span className="heading2">{item.company}</span>
      <h4 className="heading1">{item.designation}</h4>
      <span className="heading1">{item.lpa}</span>

      </div>
      
    </div> 
  ))}
</Slider>
</Container>


    </div>

  )

}

export default Placement