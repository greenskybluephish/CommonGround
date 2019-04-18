
const accessToken = window.sessionStorage.getItem("access_token")

const remoteURL = "https://api.spotify.com/v1/"

export default {
  get() {
  return fetch(
    "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=45",
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      }
    }
  ).then(res => res.json());
},
  getAll(page) {
    return fetch(`${remoteURL}/${page}`).then(e => e.json())
  },
  removeAndList (items, id) {
    return fetch(`${remoteURL}/${items}/${id}`, {
        method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`http://localhost:5002/${items}`))
    .then(e => e.json())
}
}