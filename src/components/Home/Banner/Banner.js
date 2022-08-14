import React, { useEffect, useState } from 'react';
import './Banner.css'
import { Container ,Row,Col} from 'react-bootstrap';
import Slider from 'react-slick';


const Banner = () => {
    const [sliderInfo,setSliserInfo] = useState([])

    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/slider')
        .then(res => res.json())
        .then(data => setSliserInfo(data))
    },[])

    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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
      };
    return (
        <Container fluid >
           <Row style={{position:'relative'}}>
                <Slider {...settings}>
                    {
                        sliderInfo.map(singleSlider => <div key={singleSlider._id}>
                            <div style={{position:'relative'}}>
                            <img src={singleSlider.sliderimg} className="img-fluid"  style={{width:'100%'}}/>
                            <div className='sliderContentform'>
                            <h4>{singleSlider.headline}</h4>
                                <p>{singleSlider.description.slice(0,100)}</p>
                            </div>
                            </div>
                        </div>)
                    }
                </Slider>
           </Row>
        </Container>
            
            
    );
};

export default Banner;

