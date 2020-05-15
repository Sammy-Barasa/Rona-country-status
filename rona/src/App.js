import React, { Component } from 'react';
import AllCountries  from './components/pickCountry'
import Graphs from './components/chart'
import Paperdetail from './components/paper'
import {getDailyDataGlobal} from './getApiData/'
import { getCountryData } from "./getApiData/"



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      country:"",
      data:{},
    };
  }
  handleChange= async (nation)=>{
    const CountryData = await getCountryData(nation)
    this.setState({
      country: nation,
      data:CountryData
    })
  }
  async componentDidMount(){
    const fetchedGlobal= await getDailyDataGlobal()
    this.setState({data:fetchedGlobal})
    }
  componentDidUpdate(){
    const checkChoice= this.state.country
    console.log(checkChoice)
  }
  render() {
    const country= this.state.country
    const data= this.state.data
    console.log(data)
    return (
      
      <div className='container'>
        <h1>App</h1>
        <Paperdetail data={data}/>
        <AllCountries handleChange={this.handleChange}/>
        <Graphs country={country} data={data}/>
      </div>
    );
  }
}


export default App
