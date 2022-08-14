import React from 'react';
import { Container } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const ProtectedRoute = ({children,...rest}) => {
    const {user,isLoading} = useAuth()
    let location = useLocation()

    if(isLoading){
        return <div style={{textAlign:'center'}}><div class="spinner-border text-warning" role="status"></div></div>
    };

        if(user.email){
            return children;
        }
        return <Navigate to="/login" state={{from:location}} />
    
};

export default ProtectedRoute;