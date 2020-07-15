import React, { Component } from 'react';
import './App.css';
import Blog from './blo/blog'
import Main from './blo/Man'
class App extends Component {
  render() {
    return (

  <div style= {{ backgroundColor: "#212121"}} >
        <Blog  />
        <Main />
      </div> 
    )
  }
}
export default App