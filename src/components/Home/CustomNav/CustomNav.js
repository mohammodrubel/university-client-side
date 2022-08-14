import React, { useState } from 'react';
import './CustomNav.css'
// import logo from '../../img/logo.jpg'
import { Link } from 'react-router-dom';
import { Container ,Row} from 'react-bootstrap';
import useAuth from './../../../hooks/useAuth';


const CustomNav = () => {
    const [menu,setMenu] = useState(false)
    const {user,Logout,admin} = useAuth()

    return (
        <Container fluid className="sticky">
            <Row>
            <div  style={{background:'rgb(8, 8, 49)',padding:'20px'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} className='mainNav' >
                    <div>
                        <h5 style={{color:'white'}}>EDX.University</h5>
                    </div>
                    <div>
                        <ul className={menu ? 'mobilemenuLink mobileLinkActive' : 'mobilemenuLink'}>
                            <li style={{marginTop:'15px',listStyle:'none'}}><Link style={{color:'white',textDecoration:'none',fontWeight:'500',margin:'0 10px'}} to="/">Home</Link></li>
                            <li style={{marginTop:'15px',listStyle:'none'}}><Link style={{color:'white',textDecoration:'none',fontWeight:'500',margin:'0 10px'}} to="/allcourse">Course</Link></li>
                            <li style={{marginTop:'15px',listStyle:'none'}}><Link style={{color:'white',textDecoration:'none',fontWeight:'500',margin:'0 10px'}} to="/event">Event</Link></li>
                            <li style={{marginTop:'15px',listStyle:'none'}}><Link style={{color:'white',textDecoration:'none',fontWeight:'500',margin:'0 10px'}} to="/blog">Blog</Link></li>
                            <li style={{marginTop:'15px',listStyle:'none'}}><Link style={{color:'white',textDecoration:'none',fontWeight:'500',margin:'0 10px'}} to="/customInfo">Contact Us</Link></li>

                            {user.email ? <li onClick={()=>Logout()} style={{marginTop:'15px',listStyle:'none'}}><Link style={{color:'yellow',textDecoration:'none',fontWeight:'500',margin:'0 10px'}} to="">Logout</Link></li>
                            :
                            <li  style={{marginTop:'15px',listStyle:'none'}}><Link style={{color:'white',textDecoration:'none',fontWeight:'500',margin:'0 10px'}} to="/login">login</Link></li>}
                            {admin && <li  style={{marginTop:'15px',listStyle:'none'}}><Link style={{color:'white',textDecoration:'none',fontWeight:'500',margin:'0 10px'}} to="/dashbord">Admin</Link></li>}
                        </ul>
                    </div>

                    <div className='DesktopMenu'>
                        <ul >
                            <li style={{display:'inline'}}><Link style={{color:'white',textDecoration:'none',fontWeight:'500',margin:'0 10px'}} to="/">Home</Link></li>
                            <li style={{display:'inline'}}><Link style={{color:'white',textDecoration:'none',fontWeight:'500',margin:'0 10px'}} to="/allcourse">Course</Link></li>
                            <li style={{display:'inline'}}><Link style={{color:'white',textDecoration:'none',fontWeight:'500',margin:'0 10px'}} to="/event">Event</Link></li>
                            <li style={{display:'inline'}}><Link style={{color:'white',textDecoration:'none',fontWeight:'500',margin:'0 10px'}} to="/blog">Blog</Link></li>
                            <li style={{display:'inline'}}><Link style={{color:'white',textDecoration:'none',fontWeight:'500',margin:'0 10px'}} to="/customInfo">Contact Us</Link></li>
                            {user?.email ?<li onClick={()=>Logout()} style={{display:'inline'}}><Link style={{color:'yellow',textDecoration:'none',fontWeight:'500',margin:'0 10px'}} to="/login">Logout</Link></li>
                            :
                            <li style={{display:'inline'}}><Link style={{color:'white',textDecoration:'none',fontWeight:'500',margin:'0 10px'}} to="/login">Login</Link></li>}
                            {admin && <li style={{display:'inline'}}><Link style={{color:'red',textDecoration:'none',fontWeight:'500',margin:'0 10px'}} to="/dashbord">Admin</Link></li>}
                        </ul>
                    </div>
                    <div className='MobileMenu' onClick={()=>setMenu(!menu)}>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div>
                </div>

            </div> 
            </Row>  
        </Container>
    );
};

export default CustomNav;