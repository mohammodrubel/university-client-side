import React, { useEffect, useState } from 'react';
import { Container ,Row,Col,Table} from 'react-bootstrap';

const CourseInformation = () => {
    const [courseInformation,setCourseInformation] = useState([])

    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/department')
        .then(res => res.json())
        .then(data => setCourseInformation(data))
    },[])

    const handleDeleteDataFromDatabase = id =>{
        const confirmDelete = window.confirm('are you sure you want to delete from database? ')
        if(confirmDelete){
         const url = `https://glacial-sands-19620.herokuapp.com/department/${id}`
         fetch(url,{
             method:'delete',
         })
         .then(res => res.json())
         .then(data =>{
             if(data.deletedCount > 0){
                 alert('data Delete from Database successfully')
                 const remainingUsers = courseInformation.filter(user =>user._id !== id)
                 setCourseInformation(remainingUsers)
             }
         })
        }
     }


    return (
        <Container>
            <Row>
                <h2 className='text-center'>Course Information</h2>
                {
                    courseInformation.map(courseInfo => <Col key={courseInfo._id} className='mx-auto mt-4'md={6}>
                        <div className='card'>
                            <div className="card-body">
                                <h6>Name: {courseInfo.name}</h6><hr />
                                <h6>Email:{courseInfo.email}</h6><hr />
                                <h6>Event Name: {courseInfo.eventName}</h6>
                                <h5 style={{color:'red'}}>Mobile Number: {courseInfo.mobileNumber}</h5>
                                <p className="card-text">{courseInfo.message}</p>
                                <button onClick={()=>handleDeleteDataFromDatabase(courseInfo._id)} className='customButton'>Delete Message</button>
                            </div>
                        </div>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default CourseInformation;