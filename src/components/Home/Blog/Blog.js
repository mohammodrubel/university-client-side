import React, { useEffect, useState } from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = () => {
    const [blog,setBlog]=useState([])

    useEffect(()=>{
        fetch('https://glacial-sands-19620.herokuapp.com/blog')
        .then(res => res.json())
        .then(data => setBlog(data.slice(0,6)))
    },[])

    return (
        <Container fluid className='blog'>
            <div style={{color:'tomato'}}>
                <h1 style={{color:'#FFB606'}}>Latest Blog</h1>
                <h6 style={{marginBottom:'20px'}}>Education news all over the world.</h6>
            </div>
            <Row>
                {
                    blog.map(singleBlog => <Col sm={6} md={4}>
                        <Link to={`/blog/${singleBlog._id}`} style={{textDecoration:'none'}}>
                        <div className='blogCard text-center'>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <p style={{color:"#FFB606"}}>Date: {singleBlog.blogDate}</p>
                                <p style={{color:"#FFB606"}}>Time: {singleBlog.blogTime}</p>
                            </div>
                            <img src={singleBlog.imgUrl} style={{width:'100%'}}/>
                            <h5>{singleBlog.headline.slice(0,30)}</h5>
                        </div>
                        </Link>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Blog;