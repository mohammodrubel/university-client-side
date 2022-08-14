import React, { useEffect, useState } from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
const Message = () => {
    const [message,setMessage]= useState([])

    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/message')
        .then(res => res.json())
        .then(data => setMessage(data))
    },[])


    const handleDeleteDataFromDatabase = id =>{
        const confirmDelete = window.confirm('are you sure you want to delete from database? ')
        if(confirmDelete){
         const url = `https://glacial-sands-19620.herokuapp.com/message/${id}`
         fetch(url,{
             method:'delete',
         })
         .then(res => res.json())
         .then(data =>{
             if(data.deletedCount > 0){
                 alert('data Delete from Database successfully')
                 const remainingUsers = message.filter(user =>user._id !== id)
                 setMessage(remainingUsers)
             }
         })
        }
     }

    return (
        <Container>
            <h2 style={{textAlign:'center'}}>User Special Requirements</h2><hr/>
            <Row>
                {
                    message.map(singleMessage => <Col key={singleMessage._id} className='mx-auto mt-4 col-12'>
                        <div className='card'>
                            <div className="card-body">
                                <h5>Name: {singleMessage.name}</h5><hr />
                                <h5>Email:{singleMessage.email}</h5><hr />
                                <p className="card-text">{singleMessage.message}</p>
                                <button onClick={()=>handleDeleteDataFromDatabase(singleMessage._id)} className='customButton'>Delete Message</button>
                            </div>
                        </div>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Message;