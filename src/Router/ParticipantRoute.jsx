import React from 'react';
import useRole from '../Hook/useRole';
import LoadingSpinner from '../Components/LoadingSpinner';
import { Navigate } from 'react-router-dom';

const ParticipantRoute = ({children}) => {
    const {role, isLoading} = useRole();
    if (isLoading) return <LoadingSpinner/>
    if (role === 'participant') return children;
    return <Navigate to='/dashboard/add-camp' />
};

export default ParticipantRoute;