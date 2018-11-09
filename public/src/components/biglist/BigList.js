import React from 'react';
import { handleResponse } from '../../helper';
import { RootURL } from '../../config';
import './Table.css';

class BigList extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: false,
            crypto: [],
            error: null
        };
    }

    componentDidMount() {
        this.setState({ loading: true });

        fetch(`${RootURL}/cryptocurrencies?page=1&perPage=20`)
        .then(handleResponse)
        .then((data) => {  
          this.setState({ crypto: data.currencies, loading: false });
        })
        .catch((error) => {
          this.setState({ error: error.errorMessage, loading: false });
        });
    }

    calcChangePercent(pct) {
        if (pct > 0) {
            return <span className="pct-raised">{pct}% &uarr;</span>
        } else if (pct <0) {
            return <span className="pct-fallen">{pct}% &darr;</span>
        } else {
            return <span>{pct}%</span>
        }
    }

    render() {
        if (this.state.loading) {
            return <div>Loading..., please wait...</div>
        }

        return (
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
                       {this.state.crypto.map((currency) => (
                       <tr key={currency.id}>
                          <td><span className="tb-rank">{currency.rank}</span> {currency.name}</td>
                          <td><span className="tb-dollar">$ {currency.price}</span></td> 
                          <td><span className="tb-dollar">$ {currency.marketCap}</span></td>
                          <td>{this.calcChangePercent(currency.percentChange24h)}</td>
                       </tr>
                       ))}
                   </tbody>
                </table>
            </div>
        );
    }
}

export default BigList;