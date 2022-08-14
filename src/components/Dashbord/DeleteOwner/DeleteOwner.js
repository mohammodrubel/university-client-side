import React, { useEffect, useState } from 'react';
import { Container ,Row,Col} from 'react-bootstrap';

const DeleteOwner = () => {
    const [techer,setTecher] = useState([])

    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/createtecher')
        .then(res => res.json())
        .then(data => setTecher(data))
    },[])

    const handleDeleteDataFromDatabase = id =>{
        const confirmDelete = window.confirm('are you sure you want to delete from database? ')
        if(confirmDelete){
         const url = `https://glacial-sands-19620.herokuapp.com/createtecher/${id}`
         fetch(url,{
             method:'delete',
         })
         .then(res => res.json())
         .then(data =>{
             if(data.deletedCount > 0){
                 alert('data Delete from Database successfully')
                 const remainingUsers = techer.filter(user =>user._id !== id)
                 setTecher(remainingUsers)
             }
         })
        }
     }



    return (
        <>
        <Container>
            <h2 style={{color:'tomato',textAlign:'center'}}>Team of Instructors</h2>
            <Row>
                {
                    techer.map(singleTeacher => <Col key={singleTeacher._id} md={4} style={{marginBottom:'80px'}}>
                        <div className='sliderContainer'>
                            <img src={singleTeacher.techerurl} className='form-control' />
                            <div className='CourseContent'>
                                <div>
                                    <h5 className='text-center'>{singleTeacher.name}</h5>
                                    <h6 className='text-center'>{singleTeacher.profession}</h6>
                                </div>
                            </div>
                        </div>
                        <div className='text-center mt-3'><button onClick={()=>handleDeleteDataFromDatabase(singleTeacher._id)} className='w-75 customButton'>Delete</button></div>
                    </Col>)
                }
            </Row>
        </Container>
        </>
    );
};

export default DeleteOwner;