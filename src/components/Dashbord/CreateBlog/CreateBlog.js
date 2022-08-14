import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';

const CreateBlog = () => {
    const [update,setUpdate] = useState('')


    const onBlurHendeler = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update}
        newValue[field] = value;
        setUpdate(newValue)
    }
    const blogDate= new Date().toLocaleDateString()
    const blogTime= new Date().toLocaleTimeString()

    const onSubmitHendler = e =>{
        e.preventDefault()
        const updateInfo = {
            ...update,
            blogDate,
            blogTime

        }
        fetch('https://glacial-sands-19620.herokuapp.com/blog',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateInfo)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        alert('Course update Successfully')
        e.target.reset()
    }

    return (
        <Container fluid>
            <Container>
                <h1 style={{color:'tomato',textAlign:'center',marginTop:'10px'}}>Create Blog</h1>
                <Row>
                    <Col md={8} className='mx-auto'>
                        <form className='mt-2 p-5 border border-1' onSubmit={onSubmitHendler}>
                            <input onBlur={onBlurHendeler} placeholder='Blog Headline' name='headline' className='form-control mt-3 p-2' />

                            <input onBlur={onBlurHendeler} placeholder='Blog Img Url' name='imgUrl' className='form-control mt-3 p-2' />

                            <textarea onBlur={onBlurHendeler} rows={8} placeholder='Blog Img Url' name='description' className='form-control mt-3 p-2' />

                            <button className='customButton mt-4 w-100'>Create Blog</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default CreateBlog;