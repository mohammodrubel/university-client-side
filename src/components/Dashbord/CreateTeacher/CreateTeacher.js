import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';

const CreateTeacher = () => {
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
        fetch('https://glacial-sands-19620.herokuapp.com/createtecher',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        alert('Events update Successfully')
        e.target.reset()
    }

    return (
        <Container>
            <h2 style={{color:'tomato',textAlign:'center'}}>Create Teacher </h2>
            <Row>
                <Col md={7} className='mx-auto'>
                    <form className='p-5 mt-4 border border-1' onSubmit={onSubmitHendler}>
                        <input onBlur={onBlurHendeler} name='name' placeholder='Name' className='form-control mt-3 p-2'/>
                        <input onBlur={onBlurHendeler} name='profession' placeholder='profession' className='form-control mt-3 p-2'/>
                        <input onBlur={onBlurHendeler} name='techerurl' placeholder='techerurl' className='form-control mt-3 p-2'/>
                        <button type='submit' className='customButton mt-4 w-100' >Create techer</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateTeacher;