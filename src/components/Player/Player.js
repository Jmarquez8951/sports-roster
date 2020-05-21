import React from 'react';

import playerShape from '../../helpers/propz/playerShape';

import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;

    return (
      <div classNam="Player">
        <div class="card m-0 mb-3">
          <div class="row no-gutters">
            <div class="col-3">
              <img src={player.imageUrl} class="card-img" alt="player"/>
            </div>
            <div class="col-6">
              <div class="card-body">
                <h5 class="card-title">{player.name}</h5>
                <p class="card-text">{player.position}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
