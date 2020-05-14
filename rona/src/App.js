import React, { Component } from 'react';
import AllCountries  from './components/pickCountry'
import Graphs from './components/chart'
import { getCountryData } from "./getApiData/"


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      country:"",
      data:{}
    };
  }
  handleChange= async (nation)=>{
    const CountryData = await getCountryData(nation)
    this.setState({
      country: nation,
      data:CountryData
    })
  }
  componentDidMount(){

    }
  componentDidUpdate(){
    const checkChoice= this.state.country
    console.log(checkChoice)
    const datum = this.state.data
    console.log(datum)

  }
  
  render() {
    const country= this.state.country
    const data= this.state.data
    console.log(data)
    return (
      
      <div>
        <h1>App</h1>
        <AllCountries handleChange={this.handleChange}/>
        <Graphs country={country}/>
      </div>
    );
  }
}


export default App
