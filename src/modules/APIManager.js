// const accessToken = window.sessionStorage.getItem("access_token");

const remoteURL = "https://api.spotify.com/v1";
const baseURL = "https://calm-mesa-57338.herokuapp.com";

// const spotifyHeaders = {
//   headers: {
//     Accept: "application/json",
//     Authorization: `Bearer ${accessToken}`,
//     "Content-Type": "application/json"
//   }
// }

export default {
  get: {
    spotifyTopArtists(access_token) {
      return fetch(
        `${remoteURL}/me/top/artists?time_range=medium_term&limit=50`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json"
          }
        }
      )
        .then(res => res.json())
        .then(page => {
          let artists = page.items;
          const artistArray = artists.map(artist => {
            return artist.id;
          });
          return artistArray.join();
        });
    },
    spotifyArtistsInfo(uri, access_token) {
      return fetch(`https://api.spotify.com/v1/artists?ids=${uri}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
    },
    JSONArtistDetail(user) {
      return fetch(`${baseURL}/users/${user}/?_embed=artists`)
        .then(res => res.json())
        .then(userObject => userObject.artists[0].artistDetail);
    },
    JSONArtistList(userId) {
      return fetch(`${baseURL}/users/${userId}`)
        .then(res => res.json()).then(userObject => userObject.artistList.split(","))
      },

    JSONUsers() {
      return fetch(`${baseURL}/users`).then(res => res.json());
    }
  },
  post: {
    toJSONServer(endpoint, objectToPost) {
      return fetch(`${baseURL}/${endpoint}`, {
        method: "POST",
        body: JSON.stringify(objectToPost),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(e => e.json());
    }
  }
};
