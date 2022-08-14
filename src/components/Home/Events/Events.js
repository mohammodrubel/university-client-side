import React, { useEffect, useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Event.css'

const Events = () => {
    const [event,setEvent] = useState([])
    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvent(data.slice(0,3)))
    },[]) 
    return (
        <Container fluid className='event'>
            <Row>
                <div className='text-center'style={{padding:'50px 20px'}}>
                    <h2 style={{color:'#FFB606'}}>Events</h2>
                    <h5 style={{color:'white'}}>Upcoming Education Events to feed your brain.</h5>
                </div>
                {
                    event.map(singleEvent => <Col key={singleEvent._id} className="col-12 mx-auto mt-5 p-3 border border-1" md={10}>
                        <Link to={`/event/${singleEvent._id}`} style={{textDecoration:'none'}}>
                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'5px'}}>
                            <h5 style={{color:'gray'}}>Date <br/> <span style={{color:'tomato'}}>{singleEvent.date}</span></h5>
                            <div>
                                <h2 style={{color:'#FFB606'}}>{singleEvent.event}</h2>
                                <h5 style={{color:'gray'}}><i style={{color:'#FFB606'}} className="mx-3 fa-solid fa-clock-rotate-left"></i>international time: {singleEvent.time}</h5>
                                <span style={{color:'gray'}}>{singleEvent.eventDescription.slice(0,100)}</span>
                            </div>
                            <img src={singleEvent.eventImg} style={{width:'20%'}}/>
                        </div>
                        </Link>

                        {/* <hr /> */}
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Events;