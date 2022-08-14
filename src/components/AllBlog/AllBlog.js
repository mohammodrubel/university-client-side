import React, { useEffect, useState } from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SweetPagination from "sweetpagination";
import CustomNav from '../Home/CustomNav/CustomNav';
import Footer from '../Home/Footer/Footer';

const AllBlog = () => {
    const [blogs,setBlogs] = useState([])
    const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/blog')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <>
        <CustomNav />
            <Container fluid>
            <Row>
                {
                    currentPageData.map(singleBlog => <Col key={singleBlog?._id} sm={6} md={4} lg={3} className="mt-5 mb-5">
                        <div className='sliderContainer'>
                            <Link to={`/blog/${singleBlog?._id}`} style={{textDecoration:'none'}}>
                                <img src={singleBlog?.imgUrl} className='form-control' />
                                <div className='CourseContent'>
                                    <div>
                                        <h5 className='text-center'>{singleBlog?.headline}</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Col>)
                }
            </Row>
            <Row className='mt-5'>
            <SweetPagination
                currentPageData={setCurrentPageData}
                getData={blogs}
                dataPerPage={12}
                navigation={true}
            />
            </Row>
        </Container>
        <Footer/>
        </>
        
    );
};

export default AllBlog;