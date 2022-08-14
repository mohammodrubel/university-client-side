import React, { useEffect, useState } from 'react';
import { Container ,Row,Col,Table} from 'react-bootstrap';

const DeleteSlider = () => {
    const [slider,setSlider] = useState([])

    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/slider')
        .then(res => res.json())
        .then(data => setSlider(data))
    },[])

    const handleDeleteDataFromDatabase = id =>{
        const confirmDelete = window.confirm('are you sure you want to delete from database? ')
        if(confirmDelete){
         const url = `https://glacial-sands-19620.herokuapp.com/slider/${id}`
         fetch(url,{
             method:'DELETE',
         })
         .then(res => res.json())
         .then(data =>{
             if(data.deletedCount > 0){
                 alert('data Delete from Database successfully')
                 const remainingUsers = slider.filter(user =>user._id !== id)
                 setSlider(remainingUsers)
             }
         })
        }
     }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <h3 className='text-center'>Delete Slider</h3>
                        <Table>
                            <thead>
                                <tr>
                                    <th className='text-center'>Headline</th>
                                    <th className='text-center'>img</th>
                                    <th className='text-center'>Delete</th>
                                </tr>
                            </thead>
                            {
                                slider.map(singleSlider => <tbody key={singleSlider._id}>
                                    <tr>
                                        <td style={{textAlign:'center'}}><h5>{singleSlider.headline}</h5></td>
                                        <td style={{textAlign:'center'}}><img src={singleSlider.sliderimg} className='img-fluid' style={{width:'20%'}} /></td>
                                        <td onClick={()=>handleDeleteDataFromDatabase(singleSlider._id)} style={{color:'red',textAlign:'center',marginTop:'10px'}}><b>Delete</b></td>
                                    </tr>
                                </tbody>)
                            }
                        </Table>
                    </Col>
                </Row>
            </Container>  
        </>
    );
};

export default DeleteSlider;