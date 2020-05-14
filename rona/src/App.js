import React, { Component } from 'react';
import AllCountries  from './components/pickCountry'



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      country:""
    };
  }
  handleChange=(nation)=>{
    this.setState({
      country: nation
    })
  const checkChoice= this.state.country
   console.log(checkChoice)
  }
  componentDidMount(){
    
    }
  render() {
    return (
      <div>
        <h1>App</h1>
        <AllCountries handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App
