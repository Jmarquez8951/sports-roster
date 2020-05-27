import React from 'react';

import playersData from '../../helpers/data/playersData';
import authData from '../../helpers/data/authData';

import Player from '../Player/Player';
import PlayerForm from '../PlayerForm/PlayerForm';

import './Team.scss';

class Team extends React.Component {
  state = {
    players: [],
    openForm: false,
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

  saveNewPlayer = (newPlayer) => {
    console.log(newPlayer);
  }

  render() {
    const { players, openForm } = this.state;
    const makePlayers = players.map((player) => <Player key={player.id} player={player} removePlayer={this.removePlayer}/>);

    return (
      <div className="Team">
        <div className="d-flex flex-wrap justify-content-center">
          <h1 className="m-4 p-1 col-sm col-md-9 col-lg-7 border-bottom border-dark">Atlanta Reign's Current Roster</h1>
          <div className="col-12">
            <button className="btn btn-dark m-3" onClick={() => this.setState({ openForm: true })}><i className="fas fa-plus-circle"></i> Add To Roster</button>
            {openForm ? <PlayerForm saveNewPlayer={this.saveNewPlayer}/> : ''}
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            {makePlayers}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
