import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import './index.css';
import BigList from './components/biglist/BigList';

const App = () => {
    return (
        <div>
            <Header />
            <BigList />
            <br />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);