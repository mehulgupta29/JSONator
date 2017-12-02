import React from 'react';
import FileLoader from './fileLoader/FileLoader';


export default class App extends React.Component {
  render () {
    return (
      <div>
        Welcome to JSONator
        <FileLoader/>
      </div>
    )
  }
}
