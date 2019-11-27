import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Match from './Match'

class Matches extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            matches: []
        }
    }

    async componentDidMount() {
        try {
            const response = await axios.get("http://localhost:5000/api/seasons/" + this.props.match.params.year);
            const data = response.data;
            this.setState({ matches: data });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <Router><p>{this.state.matches.map((match, i) =>
                <Link to={`/matches/${match._id}`} key={i}>
                    <div>
                        {match.team1 + "  v/s  " + match.team2}
                    </div>
                </Link>
            )}</p>
                <Route path="/matches/:match" component={Match} />
            </Router>
        );
    }
}

export default Matches