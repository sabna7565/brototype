import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '@material-ui/core/Container';
import * as api from '../../../api/home'
import { useEffect,useState } from 'react';
import './Placement.scss'
import { Link } from 'react-router-dom'



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
       let placements = Fulldata.placement ? Fulldata.placement : [];

return (
    <div className="hcarous">
        <Container>

<h1 style={{marginTop: "2rem",marginBottom:"1rem"}} className="placeheading">Placements</h1>
<Slider {...settings} style={{paddingLeft: '30px'}}>
  {placements?.map(item => (
    <Link to='/placements'>
    <div style={{ marginTop: "3rem" }} className="card">
        <div className="card-top">
         <figure class="snip1344">
         <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg" alt="profile-sample1" class="background"/>
         <img src={item.photo} alt="profile-sample1" class="profile"/>
         <figcaption>
            <h3 className="snipname">{item.name}</h3>
            <h3 className="spancompany"><span>{item.company}</span></h3>
            <h4>{item.designation}</h4>
            <span >{item.lpa}</span>
          </figcaption>
         </figure>
       </div>
     </div>
    </Link>
  ))}
</Slider>
</Container>


    </div>

  )

}

export default Placement