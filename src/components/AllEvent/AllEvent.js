import React, { useState ,useEffect} from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SweetPagination from "sweetpagination";
import CustomNav from '../Home/CustomNav/CustomNav';
import Footer from './../Home/Footer/Footer';

const AllEvent = () => {
    const [allEvent,setAllEvent] = useState([])
    const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setAllEvent(data))
    },[]) 

    return (
       <>
       <CustomNav />
         <Container fluid className='event'>
            <Row>
                <div className='text-center'style={{padding:'50px 20px'}}>
                    <h2 style={{color:'#FFB606'}}>Events</h2>
                    <h5 style={{color:'white'}}>Upcoming Education Events to feed your brain.</h5>
                </div>
                {
                    currentPageData.map(singleEvent => <Col key={singleEvent?._id} className="col-12 mx-auto mt-5 p-3 border border-1" md={10}>
                        <Link to={`/event/${singleEvent?._id}`} style={{textDecoration:'none'}}>
                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            
                            <div>
                                <h5 style={{color:'gray'}}>Date  <span style={{color:'tomato'}}>{singleEvent?.date}</span></h5>
                                <h5 style={{color:'gray'}}>Time <span style={{color:'tomato'}}>{singleEvent?.time}</span></h5>
                                <span style={{color:'gray'}}>{singleEvent?.eventDescription.slice(0,140)}</span>
                                <h2 style={{color:'#FFB606'}}>{singleEvent?.event}</h2>
                                <h5 style={{color:'gray'}}><i style={{color:'#FFB606'}} className="mx-3 fa-solid fa-clock-rotate-left"></i>international time: {singleEvent?.time}</h5>
                                
                            </div>
                            <img src={singleEvent?.eventImg} style={{width:'40%'}}/>
                        </div>
                        </Link>

                        {/* <hr /> */}
                    </Col>)
                }
            </Row>
            <Row>
                <div className='text-center mx-auto' style={{marginTop:'70px'}}>
                <SweetPagination
                currentPageData={setCurrentPageData}
                getData={allEvent}
                dataPerPage={6}
            />
                </div>
            </Row>
        </Container>
    <Footer/>
       </>
    );
};

export default AllEvent;