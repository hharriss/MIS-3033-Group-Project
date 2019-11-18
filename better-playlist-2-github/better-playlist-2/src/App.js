import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

let defaulttextcolor = '#fff';
let defaultstyle = {
  colors: defaulttextcolor
};
let fakeserverdata = 
{
user:{
name: 'Harris',
playlists: [
  {
    name: 'My favorites',
    songs: [{name: 'Beat It', duration: 1354}, 
    {name: 'Border Line', duration: 1555}, 
    {name: 'Paper Planes', duration: 2000}]
  },
  {
    name: 'SBC Gang',
    songs: [{name: 'Western Union', duration : 1444}, 
    {name: '5th element', duration : 1000}, 
    {name: 'Oreo Milkshake', duration : 1200}]
  },
  {
    name:'Country yee yee',
    songs: [{name: 'Big Iron', duration : 2000}, 
    {name: 'Sweet Revenge', duration: 1344},
    {name: 'Redneck Shit', duration : 1333}]
  },
  {
    name: 'You like jazz?',
    songs: [{name: 'Keep On', duration: 1444},
     {name: 'Street Fighter Mas', duration: 3000}, 
     {name: 'The Afterlife', duration: 1344}]
  }
]
}
};

class PlaylistCounter extends Component{
  render() {
    return (

<div style={{...defaultstyle, width : '40%', display : 'inline-block'}}>
    <h2 style = {{color: '#ffffff'}}>{this.props.playlists.length} Playlist</h2>
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
    <h2 style = {{color: '#ffffff'}}>{Math.round(TotalDuration/60)} Hours</h2>
</div>

    );
  }
}
class Filter extends Component{
render(){
  return(
<div style={{color: 'white', fontSize:'20px', display: 'center'}}>
  <img/>
  <input type = "text"/>
  Filter
</div>
  );
}
}
class Playlist extends Component{
  render() {
    return (
<div style= {{color: 'white', display: 'inline-block', width: "150px", fontSize:"200%"}}>
  <img />
  <h3> Playlist Name </h3>
  <ul><li>Song 1</li> <li>Song 2</li> <li>Song 3</li></ul>
</div>
    );
  }
}
class App extends Component {
  constructor(){
    super();
    this.state = {ServerData: {}}
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({ServerData: fakeserverdata});
    }, 1000);
  
  }
  render() { 
  return (
   <div className="App">
     {this.state.ServerData.user ?
     <div>
       <h1>  {this.state.ServerData.user.name}'s Spotify Project </h1>
       <PlaylistCounter playlists={this.state.ServerData.user.playlists}/>
       <HoursCounter playlists={this.state.ServerData.user.playlists}/>
       <Filter/>
       <Playlist/>
       <Playlist/>
       <Playlist/>
       <Playlist/>
    </div> : <h1 style={{...defaultstyle,}}>'Loading...' </h1> 
    }
    </div>

  );
  }
}

export default App;
