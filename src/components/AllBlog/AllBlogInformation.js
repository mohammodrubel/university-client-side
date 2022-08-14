import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';
import CustomNav from '../Home/CustomNav/CustomNav';
import Footer from './../Home/Footer/Footer';
import './AllBlogInformation.css'
import backgroundBlog from '../img/blog.png'
import Comments from '../Comments/Comments';


const AllBlogInformation = () => {
    const informationId = useParams()
    const information = informationId.information
    const [course,setCourese]= useState([])
    


    const [blogInformation,setBlogInformation]=useState([])

    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/blog')
        .then(res => res.json())
        .then(data => setBlogInformation(data.find((p) => p._id === information)))
    },[])

    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/createcourse')
        .then(res => res.json())
        .then(data => setCourese(data.reverse().slice(0,5)))
    },[])
   
    

    return (
        <>
            <CustomNav />
            <Container fluid className='customBlogInformation'>
                <Row>
                    <div style={{position:'relative'}}>
                        <img src={backgroundBlog} style={{width:'100%'}}/>
                        <div className='singleBlogInfo'>
                            <h4 style={{color:'#FAB519'}}>Blog Name: {blogInformation.headline}</h4>
                        </div>
                    </div>
                </Row>
                <Row>
                    <Col md={9}>
                        <div style={{display:'flex',justifyContent:'space-between',color:'white',padding:'20px',background:'#080831'}}>
                            <h5>{blogInformation.blogDate}</h5>
                            <h5>{blogInformation.blogTime}</h5>
                        </div>
                        <img src={blogInformation.imgUrl} style={{width:'100%'}} />
                        <p style={{padding:'20px'}}>{blogInformation.description}</p>

                        <Comments information={information} />
                    </Col>
                    <Col md={3}>
                        <h3 className='text-center'>popular courses</h3><hr/>
                        {
                            course.map(singleCourse => <div key={singleCourse._id} className='mt-4'>
                               <div className='m-3 sliderContainer'>
                                <Link to={`/allcourse/${singleCourse._id}`} style={{textDecoration:'none'}}>
                                    <img src={singleCourse.corseimg} className="img-fluid singleSliderIMg" style={{width:'100%',}} />
                                    <div className='CourseContent'>
                                        <h4>{singleCourse.corseName}</h4>
                                    </div>
                                </Link>
                            </div>
                            </div>)
                        }
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
};

export default AllBlogInformation;