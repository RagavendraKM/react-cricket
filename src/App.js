import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import Matches from './components/Matches';

class App extends React.Component {
  render() {
    return (
      <div>
      <NavBar />
      </div>
    );
  }
}

export default App