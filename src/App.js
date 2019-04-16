import React, { Component } from 'react';
import './App.css';
import Wild from './Wild';


class App extends Component {

  state={
    fields: {},
  };

  onSubmit = (fields) => {
    this.setState({ fields });
    console.log('App comp got:', fields);
  };

  render() {
    return (
      <div className="App">
          <Wild />
      </div>
    );
  }
}

export default App;
