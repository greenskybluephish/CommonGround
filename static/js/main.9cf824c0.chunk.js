(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(t,e,n){t.exports=n(86)},42:function(t,e,n){},58:function(t,e,n){},59:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){},84:function(t,e,n){},85:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(22),c=n.n(s),i=n(7),o=n(8),u=n(11),l=n(9),p=n(10),d=(n(42),n(19)),m=(n(24),n(87)),h=n(88),f=n(89),y=n(97),v=n(90),b=n(91),g=n(92),O=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={value:[],isOpen:!1},n.handleChange=function(t){n.setState({value:t.target.value})},n.handleSubmit=function(t){sessionStorage.clear(),localStorage.clear()},n.toggle=function(){n.setState({isOpen:!n.state.isOpen})},n}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,{color:"#464EA3",dark:!0,expand:"md"},r.a.createElement(h.a,{tag:d.b,to:"/"},"Common Ground"),r.a.createElement(f.a,{onClick:this.toggle}),r.a.createElement(y.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(v.a,{navbar:!0},r.a.createElement(b.a,null,r.a.createElement(g.a,{tag:d.b,to:"/"},"Home")),r.a.createElement(b.a,null,r.a.createElement(g.a,{tag:d.b,to:"/topartists"},"Top Artists")),r.a.createElement(b.a,null,r.a.createElement(g.a,{tag:d.b,to:"/shared"},"Share")),r.a.createElement(b.a,null,r.a.createElement(g.a,{onClick:this.handleSubmit,tag:d.b,to:"/login"},"Log Out"))))))}}]),e}(a.Component),j=n(14),E=(n(58),n(93)),S=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement("h1",null,"Hello ",this.props.currentUser))}}]),e}(a.Component),k=(n(59),n(6)),A=n.n(k),I=n(17),w="https://calm-mesa-57338.herokuapp.com",x={get:{spotifyTopArtists:function(){var t=Object(I.a)(A.a.mark(function t(e){var n,a,r,s;return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://api.spotify.com/v1","/me/top/artists?time_range=medium_term&limit=50"),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,r=a.items,s=r.map(function(t){return{name:t.name,artistId:t.id,image:t.images[1].url}}),t.abrupt("return",s);case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),spotifyArtistsInfo:function(){var t=Object(I.a)(A.a.mark(function t(e,n){var a;return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.spotify.com/v1/artists?ids=".concat(e),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(n),"Content-Type":"application/json"}});case 2:return a=t.sent,t.next=5,a.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),spotifyUserDevices:function(){var t=Object(I.a)(A.a.mark(function t(e,n){var a,r,s,c;return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.spotify.com/v1/me/player/devices",{headers:{Accept:"application/json",Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});case 2:return a=t.sent,t.next=5,a.json();case 5:return r=t.sent,s=r.devices,void 0===(c=s.find(function(t){return"Smartphone"===t.type}))&&(c={id:"e71d096f1cfb06b079f8156048933dbf5ee78350"}),t.abrupt("return",[c.id,n]);case 10:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),transferPlayback:function(){var t=Object(I.a)(A.a.mark(function t(e,n,a){return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.spotify.com/v1/me/player",{body:JSON.stringify({device_ids:[e]}),headers:{Accept:"application/json",Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},method:"PUT"});case 2:return t.sent,t.abrupt("return",[e,a]);case 4:case"end":return t.stop()}},t)}));return function(e,n,a){return t.apply(this,arguments)}}(),startPhonePlayback:function(t,e,n){return fetch("https://api.spotify.com/v1/me/player/play?device_id".concat(t),{body:JSON.stringify({context_uri:"spotify:playlist:".concat(n)}),headers:{Accept:"application/json",Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},method:"PUT"})},JSONArtistDetail:function(){var t=Object(I.a)(A.a.mark(function t(e){var n,a,r;return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(w,"/spotify/").concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,r=a.artistDetail,t.abrupt("return",r);case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),JSONUsers:function(){var t=Object(I.a)(A.a.mark(function t(){var e,n;return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(w,"/spotify"));case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),SpotifyRecs:function(){var t=Object(I.a)(A.a.mark(function t(e,n){var a,r,s,c;return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.spotify.com/v1/recommendations?limit=20&market=US&seed_artists=".concat(e,"&min_valence=0.5"),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(n),"Content-Type":"application/json"}});case 2:return a=t.sent,t.next=5,a.json();case 5:return r=t.sent,s=r.tracks,c=s.map(function(t){return t.uri}),t.abrupt("return",c.join());case 9:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()},post:{toJSONServer:function(){var t=Object(I.a)(A.a.mark(function t(e,n){var a;return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(w,"/").concat(e),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 2:return a=t.sent,t.next=5,a.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()},postPlaylistTracks:function(){var t=Object(I.a)(A.a.mark(function t(e,n,a){return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.spotify.com/v1/playlists/".concat(a,"/tracks?uris=").concat(e),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},method:"POST"});case 2:return t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}},t)}));return function(e,n,a){return t.apply(this,arguments)}}(),createPlaylist:function(){var t=Object(I.a)(A.a.mark(function t(e,n,a){var r,s;return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.spotify.com/v1/users/".concat(n,"/playlists"),{body:JSON.stringify({name:a,public:!0}),headers:{Accept:"application/json",Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},method:"POST"});case 2:return r=t.sent,t.next=5,r.json();case 5:return s=t.sent,t.next=8,s.id;case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}},t)}));return function(e,n,a){return t.apply(this,arguments)}}()},C=n(94),N=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={popoverOpen:!1},n.toggle=function(){n.setState({popoverOpen:!n.state.popoverOpen})},n.handleSubmit=function(t){n.props.tweener(t)},n}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"card",id:this.props.artist.artistId},r.a.createElement("div",{className:"card-body"},r.a.createElement("img",{src:this.props.artist.image,className:"card-img",alt:"Artist"}),r.a.createElement(C.a,{onClick:this.handleSubmit,id:"a"+this.props.artist.artistId.slice(0,5),type:"button"},this.props.artist.name)))}}]),e}(a.Component),U=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={artists:[]},n}return Object(p.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=sessionStorage.getItem("userId");x.get.JSONArtistDetail(e).then(function(e){return t.setState({artists:e})})}},{key:"render",value:function(){return r.a.createElement(E.a,{className:"topArtists"},r.a.createElement("h1",null,"Most Listened to Artists"),r.a.createElement("div",{className:"content"},this.state.artists.map(function(t){return r.a.createElement(N,{key:t.artistId,artist:t})})))}}]),e}(a.Component),P=(n(62),n(63),n(64),function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=document.createElement("script");t.src="https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js",document.body.appendChild(t)}},{key:"handleClick",value:function(t){t.preventDefault(),this.props.authenticateUser(),this.props.history.push("/home")}},{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement("h1",null,"Welcome to Common Ground"),r.a.createElement("h3",null,"Please log in to continue"),r.a.createElement(C.a,{onClick:this.handleClick.bind(this),size:"lg","bg-color":"#E3E0DA"},r.a.createElement("span",{className:"fa fa-spotify"})," Sign in with Spotify"))}}]),e}(a.Component)),T=Object(j.e)(P),D=(n(65),n(66),n(95)),J=n(96),B=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).handleClick=function(t){n.props.removeArtist(t)},n}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"card",id:this.props.artist.artistId},r.a.createElement("div",{className:"card-body"},r.a.createElement("img",{src:this.props.artist.image,className:"card-img",alt:"Artist"}),r.a.createElement(C.a,{name:this.props.artist.artistId,onClick:this.handleClick},"Remove Artist")))}}]),e}(a.Component),L=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={active:[],second:[],shared:[],onlyActive:[],onlySecond:[],playlist:[]},n.handleFieldChange=function(t){var e={};e[t.target.id]=t.target.value,n.setState(e)},n.sharedArtists=function(t){var e=t.target.id;if("magic"===e){var a=n.state.active,r=n.state.second,s=a.filter(function(t){return r.find(function(e){return e.artistId===t.artistId})}),c=a.filter(function(t){return!r.find(function(e){return e.artistId===t.artistId})}),i=r.filter(function(t){return!a.find(function(e){return e.artistId===t.artistId})});n.setState({shared:s,onlyActive:c,onlySecond:i}),document.getElementById(e).firstChild.textContent="Make a Playlist",document.getElementById("playlistName").classList.remove("display-none"),t.target.id="makePlaylist"}else"makePlaylist"===t.target.id&&n.makePlaylist()},n.makePlaylist=function(){var t=sessionStorage.getItem("access_token"),e=sessionStorage.getItem("spotifyId"),a=n.state.playlistName,r=n.state.playlist.map(function(t){return t.artistId}).join();Promise.all([x.createPlaylist(t,e,a),x.get.SpotifyRecs(r,t)]).then(function(e){x.postPlaylistTracks(e[1],t,e[0]).then(function(e){x.get.spotifyUserDevices(t,e).then(function(e){x.get.transferPlayback(e[0],t,e[1]).then(function(e){x.get.startPhonePlayback(e[0],t,e[1])})})})})},n.tweener=function(t){if(n.state.playlist.length<5){var e=t.target.parentNode.parentNode;e.classList.add("outFront");var a=t.target.previousSibling,r=n.state.active.concat(n.state.onlySecond).find(function(t){return t.artistId===e.id});n.setState({playlist:n.state.playlist.concat(r)}),setTimeout(function(){e.classList.add("display-none")},100),a.classList.add("outFront")}},n.removeArtist=function(t){var e=t.target.name;console.log(e),document.getElementById(e).classList.remove("display-none","outFront");var a=n.state.playlist.filter(function(t){return t.artistId!==e});n.setState({playlist:a})},n}return Object(p.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=sessionStorage.getItem("userId");""==this.props.secondUser?(x.get.JSONArtistDetail(e).then(function(e){return t.setState({active:e})}),x.get.JSONArtistDetail(4).then(function(e){return t.setState({second:e})})):(x.get.JSONArtistDetail(e).then(function(e){return t.setState({active:e})}),x.get.JSONArtistDetail(this.props.secondUser).then(function(e){return t.setState({second:e})}))}},{key:"componentDidUpdate",value:function(){this.state.playlist.length}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"shared"},r.a.createElement("h1",null,"Shared Artists"),r.a.createElement(D.a,null,r.a.createElement(C.a,{sm:4,id:"magic",onClick:this.sharedArtists},"Click to make Magic"),r.a.createElement(J.a,{sm:4,type:"text",onChange:this.handleFieldChange,id:"playlistName",className:"display-none",placeholder:"Name your playlist"})),r.a.createElement(D.a,{className:"playlist"},this.state.playlist.map(function(e){return r.a.createElement(B,{key:e.artistId,artist:e,removeArtist:t.removeArtist})})),r.a.createElement("div",{className:"fixer"},r.a.createElement("div",{className:"container order-sm-1 center "},this.state.shared.map(function(e){return r.a.createElement(N,{key:e.artistId,artist:e,tweener:t.tweener})})),r.a.createElement("div",{className:"container left"},this.state.onlyActive.map(function(e){return r.a.createElement(N,{key:e.artistId,artist:e,tweener:t.tweener})})),r.a.createElement("div",{className:"container order-sm-3 right"},this.state.onlySecond.map(function(e){return r.a.createElement(N,{key:e.artistId,artist:e,tweener:t.tweener})}))))}}]),e}(a.Component),_=n(13),z=n(36),M=n.n(z),F=(n(84),function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={delay:100,result:""},n.handleScan=n.handleScan.bind(Object(_.a)(Object(_.a)(n))),n}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleScan",value:function(t){this.setState({result:t})}},{key:"handleError",value:function(t){console.error(t)}},{key:"componentWillUpdate",value:function(){Number.isInteger(parseInt(this.state.result))&&this.props.secondUserAdd(this.state.result)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M.a,{delay:this.state.delay,style:{height:240,width:320},onError:this.handleError,onScan:this.handleScan,facingMode:"rear"}),r.a.createElement("h2",null,this.state.result))}}]),e}(a.Component)),H=Object(j.e)(F),R=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={isLoggedIn:!1,allUsers:[],currentUser:[],userId:[],secondUser:""},n.isAuthenticated=function(){return null!==sessionStorage.getItem("access_token")},n.secondUserAdd=function(t){n.setState({secondUser:t}),n.props.history.push("/shared")},n.authenticateUser=function(){window.OAuth.initialize("rKtNmq0HtvZws6tMLOJFcXiyypo"),window.OAuth.popup("spotify",{cache:!0}).done(function(t){sessionStorage.setItem("access_token",t.access_token),t.me().then(function(e){sessionStorage.setItem("username",e.name),sessionStorage.setItem("spotifyId",e.id),n.setState({currentUser:e.name,isLoggedIn:!0});var a=n.state.allUsers.find(function(t){return t.username===e.name});a?(n.setState({userId:a.id}),sessionStorage.setItem("userId",a.id)):x.get.spotifyTopArtists(t.access_token).then(function(t){var e={artistDetail:t,username:n.state.currentUser};x.post.toJSONServer("Spotify",e).then(function(){x.get.JSONUsers().then(function(t){var e=t.find(function(t){return t.username===n.state.currentUser});sessionStorage.setItem("userId",e.id),n.setState({userId:e.id})})})})})})},n}return Object(p.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=sessionStorage.getItem("username"),n=sessionStorage.getItem("userId");e&&this.setState({currentUser:e,isLoggedIn:!0,userId:n}),this.state.isLoggedIn||x.get.JSONUsers().then(function(e){t.setState({allUsers:e})})}},{key:"render",value:function(){var t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.b,{exact:!0,path:"/",render:function(e){return t.isAuthenticated()?r.a.createElement(j.a,{to:"/home"}):r.a.createElement(j.a,{to:"/login"})}}),r.a.createElement(j.b,{path:"/home",render:function(){return r.a.createElement(S,{currentUser:t.state.currentUser})}}),r.a.createElement(j.b,{path:"/login",render:function(){return r.a.createElement(T,{authenticateUser:t.authenticateUser})}}),r.a.createElement(j.b,{exact:!0,path:"/topartists",render:function(){return t.isAuthenticated()?r.a.createElement(U,{userId:t.state.userId}):r.a.createElement(j.a,{to:"/login"})}}),r.a.createElement(j.b,{exact:!0,path:"/weather",render:function(){return t.isAuthenticated()?r.a.createElement(H,{userId:t.state.userId,secondUserAdd:t.secondUserAdd}):r.a.createElement(j.a,{to:"/login"})}}),r.a.createElement(j.b,{exact:!0,path:"/shared",render:function(){return t.isAuthenticated()?r.a.createElement(L,{userId:t.state.userId,secondUser:t.state.secondUser}):r.a.createElement(j.a,{to:"/login"})}}))}}]),e}(a.Component),G=Object(j.e)(R),W=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement(G,null))}}]),e}(a.Component);n(85);c.a.render(r.a.createElement(d.a,null,r.a.createElement(W,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.9cf824c0.chunk.js.map