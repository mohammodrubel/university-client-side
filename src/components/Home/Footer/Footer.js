import React from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid style={{padding:'80px 0px',background:'#080831',paddingTop:'50px'}}>
            <Container>
                <Row>
                    <Col md={3}>
                        <h2 style={{color:'white'}} className='mt-2'>EDX.University</h2>
                        <li style={{listStyle:'none',color:'white'}} className='mt-3'><i className="fa-solid fa-phone mx-2" style={{color:'#F07707',fontSize:'20px'}} />+88 01907626245</li>
                        <li style={{listStyle:'none',color:'white'}} className='mt-3'><i className="fa-solid fa-envelope mx-2" style={{color:'#F07707',fontSize:'20px'}} />md.ruebl007@hotmail.com</li>
                        <li style={{listStyle:'none',color:'white'}} className='mt-3'><i className="fa-solid fa-location-dot mx-2" style={{color:'#F07707',fontSize:'20px'}} />Dhaka Bashaboo</li>
                    </Col>

                    <Col md={3} style={{textAlign:'start'}}>
                        <h4 style={{color:'white'}} className='mt-2'>Links</h4>
                        {/* <ul className='text-inline'> */}
                            <li style={{listStyle:'none',marginTop:'10px'}}><Link to=''>Event</Link></li>
                            <li style={{listStyle:'none',marginTop:'10px'}}><Link to=''>Login</Link></li>
                            <li style={{listStyle:'none',marginTop:'10px'}}><Link to=''>Registration</Link></li>
                            <li style={{listStyle:'none',marginTop:'10px'}}><Link to=''>Reset</Link></li>
                        {/* </ul> */}
                    </Col>

                    <Col>
                        <h4  style={{color:'white'}} >Information</h4>
                            <li style={{listStyle:'none',marginTop:'10px'}}><Link to=''>Blog</Link></li>
                            <li style={{listStyle:'none',marginTop:'10px'}}><Link to=''>Teacher</Link></li>
                            <li style={{listStyle:'none',marginTop:'10px'}}><Link to=''>Event</Link></li>
                            <li style={{listStyle:'none',marginTop:'10px'}}><Link to=''>Contact Us</Link></li>
                    </Col>

                    <Col>
                        <form className='mt-5'>
                            <div>
                                <input placeholder='Email' className='form-control'/>
                                <button className='customButton w-100' style={{background:'white',color:'black',marginTop:'20px'}}> Subscribe </button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Footer;