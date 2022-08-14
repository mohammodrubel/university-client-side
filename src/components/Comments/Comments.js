import React from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import commentimg from '../img/commentimg.png'

const Comments = ({information}) => {
    const [userComment,setUserComment] = useState('')
    const [blogComments,setBlogComments] = useState([])
    const {user} = useAuth()
    const [Loading,setLoading] = useState(false)

    const onBlurHendeler = e =>{
        setUserComment(e.target.value)
    }

    const formOnSubmit = e =>{
        const totalComments = {userComment,information,email:user.email,name:user.displayName}
        e.preventDefault()
        fetch('https://glacial-sands-19620.herokuapp.com/comments',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(totalComments)
        })
        .then(res => res.json())
        .then(data => data)
        alert('your comment is publish')
        e.target.reset()
        setLoading(!Loading)
    }

    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/comments')
        .then(res => res.json())
        .then(data => setBlogComments(data.filter((p)=> p.information === information)))
    },[Loading])

    const handleDeleteDataFromDatabase = id =>{
        const confirmDelete = window.confirm('are you sure you want to delete from database? ')
        if(confirmDelete){
         const url = `https://glacial-sands-19620.herokuapp.com/comments/${id}`
         fetch(url,{
             method:'DELETE',
         })
         .then(res => res.json())
         .then(data =>{
             if(data.deletedCount > 0){
                 alert('data Delete from Database successfully')
                 const remainingUsers = blogComments.filter(user =>user._id !== id)
                 setBlogComments(remainingUsers)
             }
         })
        }
     }
    

    return (
        <Container style={{marginBottom:'30px'}}>
            <Row>
                {
                    blogComments.map(singleComment => <Col className='col-12' key={singleComment._id} style={{background:'#F2F3F4',marginTop:'20px',padding:'20px'}}>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img src={commentimg} style={{width:'70px'}}/>
                            <h6><b style={{color:'#080831'}}>{singleComment.name}</b></h6>
                            {singleComment.email=== user.email ? <h6><b style={{color:'red',cursor:'pointer',margin:'0 10px'}} onClick={()=>handleDeleteDataFromDatabase(singleComment._id)}>Delete</b></h6>
                            : null}
                        </div>
                        <p>{singleComment.userComment}</p>
                    </Col>)
                }
            </Row>
            <Row>
                <Col>
                    <form className='mt-4 p-4 border border-1' onSubmit={formOnSubmit}>
                        <textarea onBlur={onBlurHendeler} rows={8} placeholder='Your Comments....' className='p-3 form-control'/>
                        <div className='mx-auto text-center mt-3'><button type='submit' className='customButton w-75'>Submit</button></div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Comments;