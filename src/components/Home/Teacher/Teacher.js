import React, { useEffect, useState } from 'react';
import { Container ,Row,Col} from 'react-bootstrap';

const Teacher = () => {
    const [techer,setTecher] = useState([])

    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/createtecher')
        .then(res => res.json())
        .then(data => setTecher(data))
    },[])

    return (
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
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Teacher;