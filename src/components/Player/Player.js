import React from 'react';
import PropTypes from 'prop-types';

import playerShape from '../../helpers/propz/playerShape';

import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    removePlayer: PropTypes.func.isRequired,
  }

  deletePlayer = (e) => {
    e.preventDefault();
    const { player, removePlayer } = this.props;
    removePlayer(player.id);
  }

  render() {
    const { player } = this.props;

    return (
      <div className="Player col-3 mb-4 mx-auto d-flex flex">
        <div className="card bg-secondary border-dark">
          <img src={player.imageUrl} className="card-img-top" alt="player"/>
          <div className="card-body bg-dark">
            <div className="card-body bg-secondary rounded-bottom">
              <h4 className="card-title text-white">{player.name}</h4>
              <p className="card-text text-white">Position: {player.position}</p>
              <button className="btn btn-danger" onClick={this.deletePlayer}><i className="fas fa-trash"></i> Cut from roster</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
