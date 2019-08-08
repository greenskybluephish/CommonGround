// const accessToken = window.sessionStorage.getItem("access_token");

const remoteURL = "https://api.spotify.com/v1";
const baseURL = "http://localhost:5002";

// const spotifyHeaders = {
//   headers: {
//     Accept: "application/json",
//     Authorization: `Bearer ${accessToken}`,
//     "Content-Type": "application/json"
//   }
// }

export default {
  get: {
    async spotifyTopArtists(access_token) {
      const res = await fetch(`${remoteURL}/me/top/artists?time_range=medium_term&limit=50`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json"
        }
      });
      const page = await res.json();
      let artists = page.items;
      const artistArray = artists.map(artist => {
        const info = {
          name: artist.name,
          artistId: artist.id,
          image: artist.images[1].url
        }
        return info;
      });

      return artistArray;
    },
    async spotifyArtistsInfo(uri, access_token) {
      const res = await fetch(`https://api.spotify.com/v1/artists?ids=${uri}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json"
        }
      });
      return await res.json();
    },
    async spotifyUserDevices(access_token, data) {
      const res = await fetch(`https://api.spotify.com/v1/me/player/devices`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json"
        }
      });
      const deviceJSON = await res.json();
      const deviceList = deviceJSON.devices;
      const phone = deviceList.find(d => d.type === "Smartphone");
      return [phone.id, data];
    },

    startPhonePlayback(deviceId, access_token, playlist) {
      return fetch(`https://api.spotify.com/v1/me/player/play?device_id${deviceId}`, {
        body: JSON.stringify({
          "context_uri": `spotify:playlist:${playlist}`
        }), 
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json"
        },
        method: "PUT"
      })
    },

    async JSONArtistDetail(user) {
      const res = await fetch(`${baseURL}/users/${user}`);
      const userObject = await res.json();
      const mappedArtist = userObject.artistDetail
      return mappedArtist;
    },

    async JSONUsers() {
      const res = await fetch(`${baseURL}/users`);
      const resArray = await res.json();
      return resArray;
    },

    async SpotifyRecs(prom,access_token) {
      const response = await fetch(`https://api.spotify.com/v1/recommendations?limit=20&market=US&seed_artists=${prom}&min_valence=0.5`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json"
        }
      });
      const data1 = await response.json();
      const uriArray = data1.tracks;
      const uri = uriArray.map(elem => {
        return elem.uri;
      });
      return uri.join();
    },
  },
  post: {
    async toJSONServer(endpoint, objectToPost) {
      const e = await fetch(`${baseURL}/${endpoint}`, {
        method: "POST",
        body: JSON.stringify(objectToPost),
        headers: {
          "Content-Type": "application/json"
        }
      });
      return await e.json();
    }
  },

  async postPlaylistTracks(uris, access_token, playlist) {
    const e = await fetch(`https://api.spotify.com/v1/playlists/${playlist}/tracks?uris=${uris}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  })
  return playlist;
  },
  async createPlaylist(access_token, user, playlistName) {
    const res = await fetch(`https://api.spotify.com/v1/users/${user}/playlists`, {
      body: JSON.stringify({
        name: playlistName,
        public: true
      }),
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json"
      },
      method: "POST"
    });
    const data = await res.json();
    return await data.id;
  },


}