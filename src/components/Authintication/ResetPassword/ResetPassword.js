import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CustomNav from '../../Home/CustomNav/CustomNav';
import Footer from '../../Home/Footer/Footer';

const ResetPassword = () => {
    const [update,setUpdate] = useState('')
    const {error,ResetPassword} = useAuth()


    const onBlurHendeler = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update};
        newValue [field] = value;
        setUpdate(newValue)
    }

    const formHendeler = e =>{
        e.preventDefault()
        ResetPassword(update.email)
        alert('check your email, and Change Password')
        e.target.reset()
    }
   
    return (
        <>
            <CustomNav />
                <Container>
                    <Row>
                        <Col md={8} className="mx-auto">
                            <form className='p-4 border border-1 mt-5 mb-5' onSubmit={formHendeler}>
                                <h3 style={{color:'#F2AD06'}}>Reset Password</h3>

                                <input required type='email' className='form-control p-3 mt-4' onBlur={onBlurHendeler} name='email' placeholder='Enput Your Email'/>

                                <div className='text-center'>
                                    <button type='submit' className='customButton mt-4 w-75'>Reset Password</button>
                                </div>
                                <div className='mt-2'>
                                    <Link style={{color:'red',textDecoration:'none'}} to='/registration'><b>If you have no Account please Registration</b></Link><br />
                                    <Link style={{color:'red',textDecoration:'none'}} to='/login'><b>If you have already Account please Login</b></Link><br />
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

export default ResetPassword;