import React, { useState } from 'react';
import { Container ,Row,Col} from 'react-bootstrap';

const CreateCourse = () => {
    const [update,setUpdate] = useState('')


    const onBlurHendeler = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update}
        newValue[field] = value;
        setUpdate(newValue)
    }


    const onSubmitHendler = e =>{
        e.preventDefault()
        fetch('https://glacial-sands-19620.herokuapp.com/createcourse',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        alert('Course update Successfully')
        e.target.reset()
    }

    return (
        <Container>
            <Row>
                <Col md={8} className=' mx-auto'>
                    <form onSubmit={onSubmitHendler}>
                        <input onBlur={onBlurHendeler} placeholder='Course Name' name='corseName' className='form-control mt-4'/>
                        <input onBlur={onBlurHendeler} placeholder='Course imgUrl' name='corseimg' className='form-control mt-4'/>
                        <textarea onBlur={onBlurHendeler} rows={5} placeholder='COURSE DESCRIPTION' name='description' className='form-control mt-4'/>
                        <textarea onBlur={onBlurHendeler} rows={5} placeholder='CERTIFICATION' name='certification' className='form-control mt-4'/>
                        <textarea onBlur={onBlurHendeler} rows={5} placeholder='LEARNING OUTCOMES' name='outcomes' className='form-control mt-4'/>
                        <button type='submit' className='customButton mt-4 mb-5 w-100'>Create Course</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateCourse;