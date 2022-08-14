import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import CustomNav from './../Home/CustomNav/CustomNav';
import { Container, Row ,Col} from 'react-bootstrap';
import backgroundBlog from '../img/blog.png'
import useAuth from '../../hooks/useAuth';

const AllEventInformation = () => {
    const [allEvent,setAllEvent] = useState([])
    const informationId = useParams()
    const [update,setUpdate] = useState('')
    const {user} = useAuth()
    const information = informationId.information
    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setAllEvent(data.find((p) => p._id === information)))
    },[])
    
    const onblurHendeler = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...update}
        newData[field] = value;
        console.log(newData)
        setUpdate(newData)
    }

    const formHendeler = e =>{
        const eventinfo = {time:allEvent.time,date:allEvent.date,name:user.displayName,email:user.email,eventName:allEvent.event,...update}
        e.preventDefault()
        fetch('https://glacial-sands-19620.herokuapp.com/eventuser',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(eventinfo)
        })
        .then(res => res.json())
        .then(data => data)
        alert('congratulations successfully submited')
        e.target.reset()
    }

    return (
        <>
        <CustomNav />
            <Container fluid className='customBlogInformation'>
                <Row>
                    <div style={{position:'relative'}}>
                        <img src={backgroundBlog} style={{width:'100%'}}/>
                        <div className='singleBlogInfo'>
                            <h4 style={{color:'#FAB519'}}>Event Name: {allEvent.event}</h4>
                        </div>
                    </div>
                </Row>
                <Row>
                    <Col sm={6} lg={8}>
                        <div style={{display:'flex',justifyContent:'space-between',color:'white',padding:'20px',background:'#080831'}}>
                            <h5>Event Time: {allEvent.time}</h5>
                            <h5>Event Date: {allEvent.date}</h5>
                        </div>
                        <img src={allEvent.eventImg} style={{width:'100%'}} />
                        <h1 style={{color:'#FAB519'}}>description</h1>
                        <p style={{padding:'20px',color:'gray'}}>{allEvent.eventDescription}</p>
                    </Col>
                    <Col sm={6} lg={4}>
                        <h3 className='text-center'>Join Our Event</h3><hr/><hr/>
                        <form className='mt-5' onSubmit={formHendeler}>

                            <div style={{display:'flex',justifyContent:'space-evenly'}}>
                                <h6 className='mt-2'>Date: {allEvent.date}</h6>
                                <h6 className='mt-2'>Date: {allEvent.time}</h6>
                            </div>

                            <span>Your Name</span>
                            <input onBlur={onblurHendeler} name='personName' className='form-control p-2' disabled value={user.displayName} /><br/>

                            <span>Your Email</span>
                            <input onBlur={onblurHendeler} name='personEmail' className='form-control p-2' disabled value={user.email} /><br/>

                            <span>Event Name</span>
                            <input onBlur={onblurHendeler} name='eventName' className='form-control p-2' disabled value={allEvent.event} /><br/>

                            <span>Mobile Number</span>
                            <input onBlur={onblurHendeler} name='mobileNumber' className='form-control p-2' required placeholder='Mobile Number' /><br/>

                            <div className='text-center mb-4'><button className='customButton w-50'>Join Our Event</button></div>
                        </form>
                    </Col>
                </Row>
            </Container>
        <Footer/>
        </>
    );
};

export default AllEventInformation;