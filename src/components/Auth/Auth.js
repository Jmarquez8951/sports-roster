import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth m-4">
        <button className="btn btn-danger" onClick={this.loginClickEvent}><i className="fab fa-google-plus-g"></i> Sign in with google</button>
        <div className="mt-4 p-4 bg-secondary border rounded border-dark">
          <img className="m-3 rounded" src="https://images.blz-contentstack.com/v3/assets/blt03a756e67609fad8/blte7704e878a59492c/5d62dda8a1306e110698ee84/OWL_AtlantaReign_Logo_DKGRAY_BKGD.svg?auto=webp" alt="Logo"/>
        </div>
      </div>
    );
  }
}

export default Auth;
