import React, { useEffect, useState } from 'react';
import { Container ,Row,Col,Table} from 'react-bootstrap';

const WebUser = () => {
    const [webuser,setwebUser] = useState([])

    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/user')
        .then(res => res.json())
        .then(data => setwebUser(data))
    },[])


    
    return (
        <Container>
                <Row>
                    <Col>
                    <h3 className='text-center'>Website User</h3>
                        <Table>
                            <thead>
                                <tr>
                                    <th className='text-center'>Headline</th>
                                    <th className='text-center'>img</th>
                                    <th className='text-center'>Role</th>
                                </tr>
                            </thead>
                            {
                                webuser.map(alluser => <tbody key={alluser._id}>
                                    <tr>
                                        <td style={{textAlign:'center'}}>{alluser.displayName}</td>
                                        <td style={{textAlign:'center'}}>{alluser.email}</td>
                                        <td style={{color:'red',textAlign:'center',marginTop:'10px'}}><b>{alluser.role}</b></td>
                                    </tr>
                                </tbody>)
                            }
                        </Table>
                    </Col>
                </Row>
            </Container> 
    );
};

export default WebUser;