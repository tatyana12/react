import React from 'react';
import './Paginate.css';
import PropTypes from 'prop-types';

const Paginate = (props) => {
    const { pg, tPages, handlePaginateClick } = props;

    return (
        <div className="Pg">
           <button className="Pg-button" onClick={() => handlePaginateClick('prev')} disabled={pg <=1}>&larr;</button>
           <span className="Pg-info">
              page <strong>{pg}</strong> of <strong>{tPages}</strong>        
           </span>
           <button className="Pg-button" onClick={() => handlePaginateClick('next')} disabled={pg >= tPages}>&rarr;</button>
        </div>
    );
}

Paginate.propTypes = {
    pg: PropTypes.number.isRequired,
    tPages: PropTypes.number.isRequired,
    handlePaginateClick: PropTypes.func.isRequired,
};

export default Paginate;