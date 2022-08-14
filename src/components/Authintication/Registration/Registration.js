import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import CustomNav from '../../Home/CustomNav/CustomNav';
import Footer from '../../Home/Footer/Footer';
import useAuth from './../../../hooks/useAuth';

const Registration = () => {
    const [update,setUpdate] = useState('')
    const {createUser,error} = useAuth()
    const navigate = useNavigate()

    const onBlurHendeler = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update};
        newValue [field] = value;
        setUpdate(newValue)
    }

    const formHendeler = e =>{
        e.preventDefault()
        if(update.password !== update.repassword){
            return alert('password did not matched, try again latter')
        }
        createUser(update.email,update.password,navigate,update.name)
        e.target.reset()
    }

    return (
        <>
            <CustomNav />
                <Container>
                    <Row>
                        <Col md={8} className="mx-auto">
                            <form className='p-4 border border-1 mt-5 mb-5' onSubmit={formHendeler}>
                                <h3 style={{color:'#F2AD06'}}>Registration</h3>

                                <input required type='text' className='form-control p-2 mt-4' onBlur={onBlurHendeler} name='name' placeholder='Enput Your Name'/>

                                <input required type='email' className='form-control p-2 mt-4' onBlur={onBlurHendeler} name='email' placeholder='Enput Your Email'/>

                                <input required type='password' className='form-control p-2 mt-4' onBlur={onBlurHendeler} name='password' placeholder='Enput Your Password'/>

                                <input required type='password' className='form-control p-2 mt-4' onBlur={onBlurHendeler} name='repassword' placeholder='Enput Your Re-password'/>

                                <div className='text-center'><button type='submit' className='customButton mt-4 w-75'>Registration</button></div>
                                <div className='mt-2'>
                                    <Link style={{color:'red',textDecoration:'none'}} to='/login'><b>If you have already Account please Login</b></Link><br />
                                    <Link style={{color:'red',textDecoration:'none'}}to='/reset'><b>Forget Password ? Reset</b></Link>
                                </div>
                                <div><h6 style={{color:'red',textAlign:'center'}}>{error}</h6></div>
                            </form>
                        </Col>
                    </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Registration;