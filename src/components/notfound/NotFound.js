import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="nf">
           <h1 className="nf-title">PAGE NOT FOUND!</h1>
           <Link to="/" className="nf-link">Go to main page</Link>
        </div>
    );
}

export default NotFound;