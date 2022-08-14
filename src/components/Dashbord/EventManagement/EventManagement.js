import React, { useEffect, useState } from 'react';
import { Container ,Row,Col,Table} from 'react-bootstrap';

const EventManagement = () => {
    const [evnetManagement,setEventManagement] = useState([])

    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/eventuser')
        .then(res => res.json())
        .then(data => setEventManagement(data))
    },[])

    const handleDeleteDataFromDatabase = id =>{
        const confirmDelete = window.confirm('are you sure you want to delete from database? ')
        if(confirmDelete){
         const url = `https://glacial-sands-19620.herokuapp.com/eventuser/${id}`
         fetch(url,{
             method:'delete',
         })
         .then(res => res.json())
         .then(data =>{
             if(data.deletedCount > 0){
                 alert('data Delete from Database successfully')
                 const remainingUsers = evnetManagement.filter(user =>user._id !== id)
                 setEventManagement(remainingUsers)
             }
         })
        }
     }


    return (
        <Container>
            <Row>
                <h2 className='text-center'>Event management Information</h2>
                {
                    evnetManagement.map(singleEvent => <Col key={singleEvent._id} className='mx-auto mt-4'md={6}>
                        <div className='card'>
                            <div className="card-body">
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    <h6>Event Data: {singleEvent.date}</h6>
                                    <h6>Event Time: {singleEvent.time}</h6>
                                </div>
                                <h6>Name: {singleEvent.name}</h6><hr />
                                <h6>Email:{singleEvent.email}</h6><hr />
                                <h6>Event Name: {singleEvent.eventName}</h6>
                                <h5 style={{color:'red'}}>Mobile Number: {singleEvent.mobileNumber}</h5>
                                <p className="card-text">{singleEvent.message}</p>
                                <button onClick={()=>handleDeleteDataFromDatabase(singleEvent._id)} className='customButton'>Delete Message</button>
                            </div>
                        </div>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default EventManagement;