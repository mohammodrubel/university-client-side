import React, { useEffect, useState } from 'react';
import { Container ,Row,Col,Table} from 'react-bootstrap';
const DeleteBlog = () => {
    const [deleteBlog,setDeleteBlog] = useState([])

    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/blog')
        .then(res => res.json())
        .then(data => setDeleteBlog(data))
    },[])

    const handleDeleteDataFromDatabase = id =>{
        const confirmDelete = window.confirm('are you sure you want to delete from database? ')
        if(confirmDelete){
         const url = `https://glacial-sands-19620.herokuapp.com/blog/${id}`
         fetch(url,{
             method:'delete',
         })
         .then(res => res.json())
         .then(data =>{
             if(data.deletedCount > 0){
                 alert('data Delete from Database successfully')
                 const remainingUsers = deleteBlog.filter(user =>user._id !== id)
                 setDeleteBlog(remainingUsers)
             }
         })
        }
     }


    return (
        <Container>
                <Row>
                    <Col>
                    <h3 className='text-center'>Delete Blog</h3>
                        <Table>
                            <thead>
                                <tr>
                                    <th className='text-center'>Headline</th>
                                    <th className='text-center'>img</th>
                                    <th className='text-center'>Delete</th>
                                </tr>
                            </thead>
                            {
                                deleteBlog.map(singleBlog => <tbody key={singleBlog._id}>
                                    <tr>
                                        <td style={{textAlign:'center'}}><h5>{singleBlog.headline}</h5></td>
                                        <td style={{textAlign:'center'}}><img src={singleBlog.imgUrl} className='img-fluid' style={{width:'20%'}} /></td>
                                        <td onClick={()=>handleDeleteDataFromDatabase(singleBlog._id)} style={{color:'red',textAlign:'center',marginTop:'10px'}}><b>Delete</b></td>
                                    </tr>
                                </tbody>)
                            }
                        </Table>
                    </Col>
                </Row>
            </Container> 
    );
};

export default DeleteBlog;