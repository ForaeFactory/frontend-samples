import React, { Component } from 'react';
import axios from 'axios';
import hash from "./hash";

export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "0c586aa8d37b4fc780a949b07e873d26";
// Client Secret fc31d3ad189e45deae823c78b5fc6708
const redirectUri = "http://localhost:3000";
const scopes = [
    "user-read-library"
];
// Get the hash of the url
const my_hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function (initial, item) {
        if (item) {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
    }, {});
window.location.hash = "";



class Auth extends Component {
    componentDidMount() {
        // Set token
        let _token = hash.access_token;
        if (_token) {
            // Set token
            this.setState({
                token: _token
            });
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {!this.state.token && (
                        <a
                            className="btn btn--loginApp-link"
                            href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
                        >
                            Login to Spotify
        </a>
                    )}
                    {this.state.token && (
        // Spotify Player Will Go Here In the Next Step
      )}
                </header>
            </div>
        );
    }
}
export default Auth;