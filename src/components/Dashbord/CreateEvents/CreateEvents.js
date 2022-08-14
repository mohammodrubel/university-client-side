import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';

const CreateEvents = () => {
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
        fetch('https://glacial-sands-19620.herokuapp.com/events',{
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
            <Row>
                <Col className='mx-auto border border-1 p-5 mt-5' md={7} >
                    <h2 style={{color:'tomato',textAlign:'center'}}>Create Evnets</h2>
                    <form className='mt-4' onSubmit={onSubmitHendler}>
                        <input onBlur={onBlurHendeler} placeholder='Event Name' name='event' className='form-control' />
                        <input onBlur={onBlurHendeler} placeholder='Event img Url' name='eventImg' className='form-control mt-4' />
                        <div style={{display:'flex',gap:"10px"}} className="mt-4">
                            <input onBlur={onBlurHendeler} type='time' name='time' className='form-control' />
                            <input onBlur={onBlurHendeler} type='date' name='date' className='form-control' />
                        </div>
                        <textarea onBlur={onBlurHendeler} rows={8} placeholder='Event Description' name='eventDescription' className='form-control mt-4' />
                        <button type='submit' className='customButton mt-4 w-100'>Create Event</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateEvents;