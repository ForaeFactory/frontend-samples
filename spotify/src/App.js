import React, { Component } from "react";
import axios from 'axios';
import Header from "./components/Header";
import SongList from "./components/SongList";
import Footer from "./components/Footer";

import SongsData from "./SongData.json";

let allData = [];
for (let i = 0; i < SongsData.length; i++) {
  allData.push(SongsData[i]);
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: [...allData],
      tracks: []
    }
  };

  // componentDidMount() {
  //   var Spotify = require('spotify-web-api-js');
  //   var s = new Spotify();
  //   const app = '0c586aa8d37b4fc780a949b07e873d26'
  //   const client_ID = '0c586aa8d37b4fc780a949b07e873d26'
  //   const client_Secret = 'fc31d3ad189e45deae823c78b5fc6708'
  //   const redirect_uri = 'http://localhost:8888/callback/'
  //   axios.get('/login', function (req, res) {
  //     const scopes = 'user-read-private user-read-email';
  //     res.redirect('https://accounts.spotify.com/authorize' +
  //       '?response_type=code' +
  //       '&client_id=' + client_ID +
  //       (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  //       '&redirect_uri=' + encodeURIComponent(redirect_uri));
  //   });

  // let webApiUrl = 'example.com/getStuff';
  // let tokenStr = 'xxyyzz';
  // axios.get(webApiUrl, { headers: { "Authorization": `Bearer ${tokenStr}` } });
  // axios.get('https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4/top-tracks', { headers: { "Authorization": `Bearer ${tokenStr}` } });
  //   .then(response => {
  //   this.setState({
  //     tracks: response.data.data
  //   });
  // })
  //   .catch(error => {
  //     console.log('Error fetching and parsing data', error);
  //   });


  handleDelete = id => {
    this.setState(prevState => {
      return {
        artists: prevState.artists.filter(a => a.id !== id)
      };
    });
  };

  render() {
    console.log(this.state.tracks)
    return (
      <div className="app-main">
        <div className="header">
          <Header />
        </div>
        <div className="list-items">
          {this.state.artists.map(artist =>
            <SongList
              name={artist.name}
              album={artist.album}
              onDelete={this.handleDelete}
              id={artist.id}
              key={artist.id.toString()}
            />
          )}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
