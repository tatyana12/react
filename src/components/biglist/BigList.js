import React from 'react';
import { handleResponse } from '../../helper';
import { RootURL } from '../../config';
import Load from '../common/Load';
import CoinTable from './CoinTable';
import Paginate from './Paginate';

class BigList extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: false,
            crypto: [],
            error: null,
            tPages: 0,
            pg: 1,
        };

        this.handlePaginateClick = this.handlePaginateClick.bind(this);
    }

    componentDidMount() {
        this.fetchNewCurrencies();
    }

    fetchNewCurrencies() {
        this.setState({ loading: true });

        const { pg } = this.state;

        fetch(`${RootURL}/cryptocurrencies?page=${pg}&perPage=20`)
        .then(handleResponse)
        .then((data) => {  
          const { currencies, totalPages } = data;

          this.setState({ crypto: currencies, loading: false, tPages: totalPages });
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

    handlePaginateClick(dir) {
        let nextPg = this.state.pg;

        nextPg = dir === 'next' ? nextPg + 1 : nextPg - 1;

        this.setState({ pg: nextPg }, () => {
            this.fetchNewCurrencies();
        });
    }

    render() {
        const { loading, crypto, error, pg, tPages } = this.state;

        if (loading) {
            return <div className="loading-container"><Load /></div>
        }

        if (error) {
            return <div className="error">{error}</div>
        }

        return (
            <div>
              <CoinTable crypto={crypto} calcChangePercent={this.calcChangePercent} />
              <Paginate pg={pg} tPages={tPages} handlePaginateClick={this.handlePaginateClick} />
            </div>
        );
    }
}

export default BigList;