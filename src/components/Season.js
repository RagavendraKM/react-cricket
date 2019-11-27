import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios';
import Matches from './Matches';

class Season extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            years: []
        }
    }

    async componentDidMount() {
        try {
            const response = await axios.get("http://localhost:5000/api/seasons")
            const data = response.data;
            this.setState({ years: data });
        } catch (e) {
            console.log(e);
        }
        // .then(response => response.data)
        // .then(data => {
        //     // console.log("cc",data);
        //     this.setState({ years: data });
        // })
    }

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <h2>Season</h2>
                        <p>{this.state.years.sort().map((year, i) =>
                            <Link to={`/year/${year}`} key={i}>
                                <div>{year}</div>
                            </Link>
                        )}
                        </p>
                        <Route path="/year/:year" component={Matches} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default Season