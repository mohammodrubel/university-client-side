import React from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail] = useState('')

    const hanelOnBlur = e =>{
        setEmail(e.target.value);
    }

    const formSubmit = e =>{
        e.preventDefault()
        const information = {email}
        fetch('https://glacial-sands-19620.herokuapp.com/user/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(information)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        alert('admin created successfull')
    }
    

    return (
        <Container>
            <Row>
                
                <Col md={6} className='mx-auto mt-4'>
                <h2 className='text-center'>Create Admin</h2>
                    <form className='mt-5 p-5 border border-1' onSubmit={formSubmit}>
                        <input onBlur={hanelOnBlur}name='email' className='p-3 form-control' placeholder='Create Admin'/>
                        <div className='text-center'><button className='mt-4 w-75 customButton'>Create Admin</button></div>
                    </form>
                </Col>
            </Row>
        </Container>
    )
    
    };
export default MakeAdmin;