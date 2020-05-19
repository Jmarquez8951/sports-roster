import React from 'react';
import './App.scss';

import Auth from '../components/Auth/Auth';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Team from '../components/Team/Team';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavbar/>
        <h2>Testing</h2>
        <Auth/>
        <Team/>
        <button className="btn btn-info"><i class="fas fa-rocket"></i></button>
      </div>
    );
  }
}

export default App;
