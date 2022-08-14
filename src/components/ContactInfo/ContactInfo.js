import React, { useState } from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import CustomNav from '../Home/CustomNav/CustomNav';
import Footer from '../Home/Footer/Footer';

const ContactInfo = () => {
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
        fetch('https://glacial-sands-19620.herokuapp.com/message',{
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
        <>
        <CustomNav></CustomNav>
            <Container>
            <Row style={{margin:'100px 0px',display:'flex',alignItems:'center'}}>
                <Col md={8} className='mx-auto'>
                    <h2 style={{color:'#FFB606',textAlign:'center'}}>Contact Us</h2> <hr/>
                    <form onSubmit={onSubmitHendler}>
                        <input onBlur={onBlurHendeler} name='name' className='form-control mt-3 p-3' placeholder='Your Name' />
                        <input onBlur={onBlurHendeler} name='email' className='form-control mt-3 p-3' placeholder='Your Email' />
                        <textarea onBlur={onBlurHendeler} name='message' rows={8} className='form-control mt-3 p-3' placeholder='Special Request Or Anything' />
                        <div className='mx-auto text-center mt-4'>
                            <button className='customButton w-75 text-center'>Submit</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default ContactInfo;