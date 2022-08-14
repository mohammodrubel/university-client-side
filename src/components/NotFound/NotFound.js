import React from 'react';
import { Container } from 'react-bootstrap';
import CustomNav from '../Home/CustomNav/CustomNav';
import Footer from '../Home/Footer/Footer';
import notfound from '../img/notfound.jpg'

const NotFound = () => {
    return (
        <>
        <CustomNav></CustomNav>
        <Container fluid>
            <img  src={notfound} className='imgfluid' style={{width:'100%'}}/>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default NotFound;