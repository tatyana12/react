import React from 'react';
import './Table.css';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const CoinTable = (props) => {
    const { crypto, calcChangePercent, history } = props;

    return (
        /* The UI content from BigList will be copied here */
        <div className="tb-container">
                
        <table className="tb">
           <thead className="tb-head">
                  <tr>
                      <th>Crypto Name</th>
                      <th>Price</th>
                      <th>Market Cap</th>
                      <th>24 Hour Chg</th>
                  </tr>                    
           </thead>
           <tbody className="tb-body">
               {crypto.map((currency) => (
               <tr key={currency.id} onClick={() => history.push(`/currency/${currency.id}`)}>
                  <td><span className="tb-rank">{currency.rank}</span> {currency.name}</td>
                  <td><span className="tb-dollar">$ </span>{currency.price}</td> 
                  <td><span className="tb-dollar">$ </span>{currency.marketCap}</td>
                  <td>{calcChangePercent(currency.percentChange24h)}</td>
               </tr>
               ))}
           </tbody>
        </table>
    </div>
    );
}

CoinTable.propTypes = {
    crypto: PropTypes.array.isRequired,
    calcChangePercent: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(CoinTable);