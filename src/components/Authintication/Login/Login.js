import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import CustomNav from '../../Home/CustomNav/CustomNav';
import Footer from '../../Home/Footer/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const [update,setUpdate] = useState('')
    const {loginUser,error,googleSingIn} = useAuth()
    const location = useLocation()
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
        loginUser(update.email,update.password,location,navigate)
        e.target.reset()
    }
    const googleLogin = e =>{
        googleSingIn(location,navigate)
    }

    return (
        <>
            <CustomNav />
                <Container>
                    <Row>
                        <Col md={8} className="mx-auto">
                            <form className='p-4 border border-1 mt-5 mb-5' onSubmit={formHendeler}>
                                <h3 style={{color:'#F2AD06'}}>Login</h3>

                                <input required type='email' className='form-control p-3 mt-4' onBlur={onBlurHendeler} name='email' placeholder='Enput Your Email'/>

                                <input required type='password' className='form-control p-3 mt-4' onBlur={onBlurHendeler} name='password' placeholder='Enput Your Password'/>

                                <div className='text-center'>
                                    <button type='submit' className='customButton mt-4 w-75'>Login</button>
                                    <button onClick={googleLogin} className='customButton mt-4 w-50'>Sing In With Google</button>
                                </div>
                                <div className='mt-2'>
                                    <Link style={{color:'red',textDecoration:'none'}} to='/registration'><b>If you have no Account please Registration</b></Link><br />
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

export default Login;