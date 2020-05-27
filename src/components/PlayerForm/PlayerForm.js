import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

import './PlayerForm.scss';

class PlayerForm extends React.Component {
  static propTypes = {
    saveNewPlayer: PropTypes.func.isRequired,
  }

  state = {
    playerName: '',
    playerImageUrl: '',
    playerPosition: '',
  }

  savePlayer = (e) => {
    e.preventDefault();
    const { playerName, playerImageUrl, playerPosition } = this.state;
    const { saveNewPlayer } = this.props;
    const newPlayer = {
      name: playerName,
      imageUrl: playerImageUrl,
      position: playerPosition,
      uid: authData.getUid(),
    };
    saveNewPlayer(newPlayer);
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ playerImageUrl: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  }

  render() {
    const { playerImageUrl, playerName, playerPosition } = this.state;

    return (
      <div className="PlayerForm m-3">
        <form className="col-6 mx-auto">
          <div className="form-group">
            <label htmlFor="player-name">Name</label>
            <input
              type="text"
              className="form-control"
              id="player-name"
              placeholder="Jimmy Walton"
              value={playerName}
              onChange={this.nameChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="player-imageUrl">ImageUrl</label>
            <input
              type="text"
              className="form-control"
              id="player-imageUrl"
              placeholder="Image Url goes here"
              value={playerImageUrl}
              onChange={this.imageChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="player-position">Position</label>
            <input
              type="text"
              className="form-control"
              id="player-position"
              placeholder="Player position"
              value={playerPosition}
              onChange={this.positionChange}/>
          </div>
          <button className="btn btn-dark" onClick={this.savePlayer}><i className="fas fa-plus-circle"></i> Add Player</button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
