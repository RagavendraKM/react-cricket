import React from 'react';
// import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Season from './Season'

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home </h1>
                {/* <button><Link to='/:season'>{season}</Link></button><br /><br /> */}
                <Route path='/:season' component={Season} />
                {/* <Season /> */}
            </div>
        );
    }
}

export default Home