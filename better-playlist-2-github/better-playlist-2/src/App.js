
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import queryString from 'query-string';

let defaulttextcolor = '#fff';
let defaultstyle = {
  colors: defaulttextcolor
};
let fakeserverdata = 
{
user:{

name: 'Kennedy and Harris',

playlists: [
  {
    name: 'My favorites',
    songs: [{name: 'Beat It', duration: 135}, 
    {name: 'Border Line', duration: 155}, 
    {name: 'Paper Planes', duration: 200}]
  },
  {
    name: 'SBC Gang',
    songs: [{name: 'Western Union', duration : 144}, 
    {name: '5th element', duration : 100}, 
    {name: 'Oreo Milkshake', duration : 120}]
  },
  {
    name:'Country yee yee',
    songs: [{name: 'Big Iron', duration : 200}, 
    {name: 'Sweet Revenge', duration: 134},
    {name: 'Redneck Shit', duration : 133}]
  },
  {
    name: 'You like jazz?',
    songs: [{name: 'Keep On', duration: 144},
     {name: 'Street Fighter Mas', duration: 300}, 
     {name: 'The Afterlife', duration: 134}]
  }
]
}
};

class PlaylistCounter extends Component{
  render() {
    return (

<div style={{...defaultstyle, width : '40%', display : 'inline-block'}}>
    <h2 style = {{color: '#ffffff'}}>{this.props.playlists.length} Playlist(s)</h2>
</div>

    );
  }
}
class HoursCounter extends Component{
  render() {
    let AllSongs= this.props.playlists.reduce((songs, eachplaylist) => {
      return songs.concat(eachplaylist.songs) ///this gets all songs in one list
     } , [])
      
    let TotalDuration= AllSongs.reduce((sum, eachsong) => {
      return sum+ eachsong.duration
    }, 0)
    return (

<div style={{...defaultstyle, width : '40%', display : 'inline-block'}}>
    <h2 style = {{color: '#ffffff'}}>{Math.round(TotalDuration/60)} Minutes</h2>
</div>

    );
  }
}
class Explicitcounter extends Component{
  render() {
    let AllSongs= this.props.playlists.reduce((songs, eachplaylist) => {
      return songs.concat(eachplaylist.songs) ///this gets all songs in one list
     } , [])
      
    let Totalexplicit= AllSongs.reduce((sum, eachsong) => {
      return sum+ eachsong.explicit
    }, 0)
    return (

<div style={{...defaultstyle, width : '40%', display : 'inline-block'}}>
    <h2 style = {{color: '#ffffff'}}>{Totalexplicit} Explicit songs</h2>
</div>

    );
  }
}
class Songcounter extends Component{
  render() {
    let AllSongs= this.props.playlists.reduce((songs, eachplaylist) => {
      return songs.concat(eachplaylist.songs) ///this gets all songs in one list
     } , [])
      
    let Totalexplicit= AllSongs.map((sum, eachsong) => {
      return sum+ eachsong.name
    }, 0)
    return (

<div style={{...defaultstyle, width : '40%', display : 'inline-block'}}>
    <h2 style = {{color: '#ffffff'}}>{Totalexplicit.length} Explicit songs</h2>
</div>
    );
  }
}
class ExplicitRatio extends Component{
  render() {
    let AllSongs= this.props.playlists.reduce((songs, eachplaylist) => {
      return songs.concat(eachplaylist.songs) ///this gets all songs in one list
     } , [])
      
     let Totalsongs= AllSongs.map((sum, eachsong) => {
      return sum+ eachsong.name
    }, 0)
    let Totalexplicit= AllSongs.reduce((sum, eachsong) => {
      return sum+ eachsong.explicit
    }, 0)
    let expliciratio = Math.round((Totalexplicit / Totalsongs.length) * 100)
    if(expliciratio ==0)
    {
      return(
        <div style={{...defaultstyle, width : '40%', display : 'inline-block'}}>
    <h2 style = {{color: '#ffffff'}}>{ Math.round((Totalexplicit / Totalsongs.length) * 100)}% of the music is explict</h2>
    <h2 style = {{color: '#0F6C00'}}>Your music is squeaky clean :D</h2></div>
      );
    }
    else if (expliciratio <= 19 )
    {
      return(
<div style={{...defaultstyle, width : '40%', display : 'inline-block'}}>
    <h2 style = {{color: '#ffffff'}}>{ Math.round((Totalexplicit / Totalsongs.length) * 100)}% of the music is explict</h2>
    <h2 style = {{color: '#4AEC30'}}>Everybody has a little sin in them :)</h2>
</div>
      );
    }
    else if (expliciratio <=49)
    {
      return(
        <div style={{...defaultstyle, width : '40%', display : 'inline-block'}}>
        <h2 style = {{color: '#ffffff'}}>{ Math.round((Totalexplicit / Totalsongs.length) * 100)}% of the music is explict</h2>
        <h2 style = {{color: '#E9FF10'}}>Let's keep it PG-13 now...</h2>
    </div>    
      );
    }
    else if (expliciratio <=79)
    {
      return(
        <div style={{...defaultstyle, width : '40%', display : 'inline-block'}}>
        <h2 style = {{color: '#ffffff'}}>{ Math.round((Totalexplicit / Totalsongs.length) * 100)}% of the music is explict</h2>
        <h2 style = {{color: '#F0920B'}}>It's just a phase, mom</h2>
    </div>    
      );
    }
    else if(expliciratio <= 100)
    {
      return(
<div style={{...defaultstyle, width : '40%', display : 'inline-block'}}>
    <h2 style = {{color: '#ffffff'}}>{ Math.round((Totalexplicit / Totalsongs.length) * 100)}% of the music is explict</h2>
    <h2 style = {{color: '#F00B0B'}}>You need Jesus</h2>
</div>
      );
    }

   
    return (

<div style={{...defaultstyle, width : '40%', display : 'inline-block'}}>
    <h2 style = {{color: '#ffffff'}}>{ Math.round((Totalexplicit / Totalsongs.length) * 100)}% of the music is explict</h2>
    <h2 style = {{color: '#F00B0B'}}>You need Jesus</h2>
</div>

    );
    
  }
}


class Filter extends Component{
render(){
  return(
<div style={{color: 'white', fontSize:'20px', display: 'center'}}>
  <img/>
  
  <input type = "text" onKeyUp={event =>
     this.props.onTextChange(event.target.value)}/>
  Filter
</div>
  );
}
}
class Playlist extends Component{
  render() {
    let playlist = this.props.playlist
    return (
<div style= {{color: 'white', display: 'inline-block', width: "150px", fontSize:"100%"}}>
  <img src={playlist.imageUrl} style={{width:'60px'}}/>
  <h3> {playlist.name}</h3>
  {/* <ul>
    {playlist.songs.map( song => 
    <li>{song.name}</li>
    )}
    </ul> */}
</div>
    );
  }
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      ServerData: {},
    filterString: ''
    }
  }
  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (!accessToken)
      return;
    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(response => response.json())
    .then(data => this.setState({
      user: {
        name: data.display_name
      }
    }))

    fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(response => response.json())
    .then(playlistData => {
      let playlists = playlistData.items
      let trackDataPromises = playlists.map(playlist => {
        let responsePromise = fetch(playlist.tracks.href, {
          headers: {'Authorization': 'Bearer ' + accessToken}
        })
        let trackDataPromise = responsePromise
          .then(response => response.json())
        return trackDataPromise
      })
      let allTracksDataPromises = 
        Promise.all(trackDataPromises)
      let playlistsPromise = allTracksDataPromises.then(trackDatas => {
        trackDatas.forEach((trackData, i) => {
          playlists[i].trackDatas = trackData.items
          .map(item => item.track)
          .map(trackData => ({
            name: trackData.name,
            duration: trackData.duration_ms / 1000,
            artist: trackData.artists,
            explicit: trackData.explicit,
            popular: trackData.popularity
          }))

        })
        return playlists
      })
      return playlistsPromise
    })
    .then(playlists => this.setState({
      playlists: playlists.map(item => {
        console.log(item.trackDatas)
        return {
          name: item.name,
          imageUrl: item.images[0].url, 
          songs: item.trackDatas
          // .slice(0,3)
        }
    })
    }))

  }

  render() {
    let playliststorender =
     this.state.user && 
    this.state.playlists
     ? this.state.playlists.filter(playlist =>
      playlist.name.toLowerCase().includes(
        this.state.filterString.toLowerCase())
      ) :[]
  return (
   <div className="App">
     {this.state.user ?
     <div>
       <h1> Kennedy and Harris Spotify Project </h1>
       <body>
       <PlaylistCounter playlists={playliststorender}/>
       <HoursCounter playlists={playliststorender}/>
       <ExplicitRatio playlists={playliststorender} />
       <Filter onTextChange={text => 
        this.setState({filterString: text})}/>
       {playliststorender.map(playlist =>
        <Playlist playlist={playlist} />
        )}
        </body>
    </div> : <button onClick={() =>window.location='http://localhost:8888/login'}
    style={{padding: '20px', 'fontSize': '50px', 'maring-top': '20px'}}>'Sign in with Spotify' </button> 
    }
    </div>

  );
  }
}

export default App;
