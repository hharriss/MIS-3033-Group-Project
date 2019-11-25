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
name: 'Kennedy and Harris rip?',
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
    <h2 style = {{color: '#ffffff'}}>{Math.round(TotalDuration/60)} Minutes</h2>
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
    return (
<div style= {{color: 'white', display: 'inline-block', width: "150px", fontSize:"200%"}}>
  <img />
  <h3> {this.props.playlist.name}</h3>
  <ul>
    {this.props.playlist.songs.map( song => 
    <li>{song.name}</li>
    )}
    </ul>
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
  componentDidMount(){
    setTimeout(() => {
      this.setState({ServerData: fakeserverdata});
    }, 1000);

  
  }
  render() {
    let playliststorender = this.state.ServerData.user ? this.state.ServerData.user.playlists
    .filter(playlist =>
      playlist.name.toLowerCase().includes(
        this.state.filterString.toLowerCase())
      ) :[]
  return (
   <div className="App">
     {this.state.ServerData.user ?
     <div>
       <h1>  {this.state.ServerData.user.name}'s Spotify Project </h1>
       <PlaylistCounter playlists={playliststorender}/>
       <HoursCounter playlists={playliststorender}/>
       <Filter onTextChange={text => 
        this.setState({filterString: text})}/>
       {playliststorender.map(playlist =>
        <Playlist playlist={playlist} />
        )}
    </div> : <h1 style={{...defaultstyle,}}>'Loading....' </h1> 
    }
    </div>

  );
  }
}

export default App;
