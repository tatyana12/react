import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import './index.css';
import BigList from './components/biglist/BigList';
import NotFound from './components/notfound/NotFound';
import DetailCurrency from './components/detailcurrency/DetailCurrency';

const App = () => {
    return (
        <BrowserRouter>
          <div>
            <Header />
            
            <Switch>
                <Route path="/" component={BigList} exact />
                <Route path="/currency/:id" component={DetailCurrency} exact />
                <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);