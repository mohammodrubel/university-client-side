import React, { useEffect, useState } from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomNav from '../Home/CustomNav/CustomNav';
import Footer from '../Home/Footer/Footer';
import SweetPagination from "sweetpagination";

const AllCourse = () => {
    const [allCourse,setAllCourse] = useState([])
    const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());


    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/createcourse')
        .then(res => res.json())
        .then(data => setAllCourse(data))
    },[])

    return (
        <>
        <CustomNav />
            <Container fluid>
            <Row>
                {
                    currentPageData.map(singleCorse => <Col key={singleCorse?._id} lg={3} sm={6} md={4}>
                        <div className='m-3 sliderContainer'>
                            <Link to={`/allcourse/${singleCorse?._id}`} style={{textDecoration:'none'}}>
                                <img src={singleCorse?.corseimg} className="img-fluid singleSliderIMg" style={{width:'100%',}} />
                                <div className='CourseContent'>
                                    <h4>{singleCorse?.corseName}</h4>
                                    <button className='customButton'>More Information</button>
                                </div>
                            </Link>
                        </div>
                    </Col>)
                }
            </Row>
        </Container>
        <Container>
            <Row>
                <Col className='mx-auto mt-4 mb-4'>
                <SweetPagination
                    currentPageData={setCurrentPageData}
                    getData={allCourse}
                    dataPerPage={12}
                />
                </Col>
            </Row>
        </Container>
        <Footer/>
        </>
    );
};

export default AllCourse;