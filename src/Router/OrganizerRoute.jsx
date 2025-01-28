import React from 'react';
import useRole from '../Hook/useRole';
import LoadingSpinner from '../Components/LoadingSpinner';
import { Navigate } from 'react-router-dom';

const OrganizerRoute = ({children}) => {
    const {role, isLoading} = useRole();
    if (isLoading) return <LoadingSpinner/>
    if (role === 'organizer') return children;
    return <Navigate to='/dashboard/analytics' />
};

export default OrganizerRoute;