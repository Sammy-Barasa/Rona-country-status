
import React from "react";
import { getCountries } from '../getApiData/'

import { InputLabel, Select, FormControl } from '@material-ui/core';

const coun = async ()=>{await getCountries()}
console.log(coun)

export default function countryToGet(props) {
    

    return (
        <div>
        <FormControl className={'FormControl'}>
        <InputLabel htmlFor='CountryChosen'>Country</InputLabel>
        <Select native value={props.country} onChange={props.handleChange} inputProps={{name: 'Country',id: 'CountryChosen',}}>
          <option aria-label="None" value="" />
        {(coun)=>{coun.forEach((country, index)=> {
          return  <option key={index} value={country}>{country}</option>
        })}}
        </Select>
      </FormControl>
      </div>
    );       
}