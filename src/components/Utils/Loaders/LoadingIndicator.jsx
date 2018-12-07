import { ClipLoader } from 'react-spinners';
import React from 'react';

const LoadingIndicator = () => {
    const spinnerStyle = {
        top: '50%',
        left: '48%',
        position: 'relative',
        marginTop: '250px',
        marginBottom: '250px',
    };

    return (
        <div style={spinnerStyle}>
            <ClipLoader size={80} color={'#2b59a8'} />
        </div>
    )
}

export default LoadingIndicator;