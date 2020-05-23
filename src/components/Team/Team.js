import React from 'react';

import playersData from '../../helpers/data/playersData';
import authData from '../../helpers/data/authData';

import Player from '../Player/Player';

import './Team.scss';

class Team extends React.Component {
  state = {
    players: [],
  }

  getInfo = () => {
    playersData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('unable to retrieve players.', err));
  }

  componentDidMount() {
    this.getInfo();
  }

  removePlayer = (playerId) => {
    playersData.deletePlayer(playerId)
      .then(() => this.getInfo())
      .catch((err) => console.error('unable to delete player.', err));
  }

  render() {
    const { players } = this.state;
    const makePlayers = players.map((player) => <Player key={player.id} player={player} removePlayer={this.removePlayer}/>);

    return (
      <div className="Team d-flex flex-wrap justify-content-center">
        <h1 className="m-4 p-1 col-6 border-bottom border-dark">Atlanta Reign's Current Roster</h1>
        <div className="d-flex flex-wrap justify-content-center">
          {makePlayers}
        </div>
      </div>
    );
  }
}

export default Team;
