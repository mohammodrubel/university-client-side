import React, { useEffect, useState } from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import backgroundBlog from '../img/blog.png'
import { useParams } from 'react-router-dom';
import CustomNav from '../Home/CustomNav/CustomNav';
import Footer from '../Home/Footer/Footer';
import useAuth from './../../hooks/useAuth';

const AllCourseInformation = () => {
    const informationId = useParams()
    const information = informationId.information
    const [course,setCourse] = useState([])
    const [update,setUpdate]=useState('')
    const {user} =  useAuth()

    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/createcourse')
        .then(res => res.json())
        .then(data => setCourse(data.find((p) => p._id === information)))
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
        const eventinfo = {name:user.displayName,email:user.email,courseName:course.corseName,...update}
        e.preventDefault()
        fetch('https://glacial-sands-19620.herokuapp.com/department',{
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
                        <h4 style={{color:'#FAB519'}}>Course Name: {course.corseName}</h4>
                    </div>
                </div>
            </Row>
            <Row>
                <Col sm={6} md={8}>
                        <img src={course.corseimg} style={{width:'100%'}} className='mt-5' />
                        <h2 style={{color:'#FAB519'}} className='mt-4'><b>COURSE DESCRIPTION</b></h2>
                        <p style={{color:'gray'}}>{course.description}</p><br/>
                        <h2 style={{color:'#FAB519'}} className='mt-4'><b>CERTIFICATION</b></h2>
                        <p style={{color:'gray'}}>{course.certification}</p><br/>
                        <h2 style={{color:'#FAB519'}} className='mt-4'><b>LEARNING OUTCOMES</b></h2>
                        <p style={{color:'gray'}}>{course.outcomes}</p><br/>
                </Col>
                <Col sm={6} md={4}>
                <h3 className='text-center'>Join Our Department</h3><hr/><hr/>
                        <form className='mt-5' onSubmit={formHendeler}>


                            <span>Your Name</span>
                            <input onBlur={onblurHendeler} name='personName' className='form-control p-2' disabled value={user.displayName} /><br/>

                            <span>Your Email</span>
                            <input onBlur={onblurHendeler} name='personEmail' className='form-control p-2' disabled value={user.email} /><br/>

                            <span>Event Name</span>
                            <input onBlur={onblurHendeler} name='courseName' className='form-control p-2' disabled value={course.corseName} /><br/>

                            <span>Mobile Number</span>
                            <input onBlur={onblurHendeler} name='mobileNumber' className='form-control p-2' required placeholder='Mobile Number' /><br/>

                            <div className='text-center mb-4'><button className='customButton w-50'>Join Our Department</button></div>
                        </form>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </>
    );
};

export default AllCourseInformation;