import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

let defaulttextcolor = '#fff';
let defaultstyle = {
  colors: defaulttextcolor
};

class Aggregate extends Component{
  render() {
    return (
      <body>
<div style={{...defaultstyle, width : '40%', display : 'inline-block'}}>
  <h2 style = {{color: '#ffffff'}}> Number Text</h2>
</div>
</body>
    );
  }
}
class Filter extends Component{
render(){
  return(
<div>
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
  render() {
  return (
   <div className="App">
       <h1> Spotify Project </h1>
       <Aggregate/>
       <Aggregate/>
       <Filter/>
       <Playlist/>
       <Playlist/>
       <Playlist/>
    </div>

  );
  }
}

export default App;
