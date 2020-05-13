import React, { Component } from 'react';
import CountrySelector from './components/pickCountry'



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      country:""
    };
  }
  componentDidMount(){
    
    }
  render() {
    return (
      <div>
        <h1>App</h1>
        <CountrySelector  handleChange={(e)=>{console.log('changed')}}/>
      </div>
    );
  }
}

export default App
