import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';

const CreateSlider = () => {
    const [update,setUpdate] = useState('')

    const onBlurHendeler = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update} ;
        newValue[field] = value;
        setUpdate(newValue)

    }

    const formHendeler = e =>{
        e.preventDefault()
        // const sliderInfo = {update}
        fetch('https://glacial-sands-19620.herokuapp.com/slider',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        alert('slider added Successfully')
        e.target.reset()
    }



    return (
        <Container>
            <Row>
                <Col md={6} className='mx-auto'>
                    <h1 style={{textAlign:'center',marginTop:'20px',color:'tomato'}}>Create Slider</h1>
                    <form className='p-5 border border-1 mt-5' onSubmit={formHendeler}>
                        <input onBlur={onBlurHendeler} className='form-control p-2 mt-3' placeholder='Slider Headline' name='headline' />
                        <input onBlur={onBlurHendeler} className='form-control p-2 mt-3' placeholder='Slider Description' name='description' />
                        <input onBlur={onBlurHendeler} className='form-control p-2 mt-3' placeholder='slider img url' name='sliderimg' />
                        <button type='submit' className='customButton w-100 mt-3'>Create Slider</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateSlider;