import React, { useEffect, useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Course.css'

const Course = () => {
    const [course,setCourse] = useState([])

    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/createcourse')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])

    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
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
        <>
        <Container fluid>
            <Row>
                <div style={{padding:'20px'}}>
                    <h2 >Popular Course​</h2>
                    <h4 style={{color:'gray'}}><i>Limitless learning, more possibilities</i></h4>
                </div>
            </Row>
        </Container>
        <Container fluid>
            <Row>
                <Slider {...settings}>
                    {
                        course.map(singleCorse => <Col key={singleCorse._id}>
                            <div className='m-3 sliderContainer'>
                                <Link to={`/allcourse/${singleCorse._id}`} style={{textDecoration:'none'}}>
                                    <img src={singleCorse.corseimg} className="img-fluid singleSliderIMg" style={{width:'100%',}} />
                                    <div className='CourseContent'>
                                        <h4>{singleCorse.corseName}</h4>
                                        <button className='customButton'>More Information</button>
                                    </div>
                                </Link>
                            </div>
                        </Col>)
                    }
                </Slider>
            </Row>
        </Container>
        </>
    );
};

export default Course;