
import React , { useState,useEffect }from "react";
import { getCountries } from '../getApiData/'
import { InputLabel, NativeSelect, FormControl } from '@material-ui/core';



const AllCountries =({handleChange}) =>{
   const [countries,setCountries]= useState([]);
    useEffect(()=>{
        const fetchAPI = async () => {
            setCountries(await getCountries());
          };
      
          fetchAPI();
          console.log(countries)
        },[setCountries]);


    return (
        countries.length!==0?
        <div>
            <FormControl className={'FormControl'}>
                <InputLabel htmlFor='CountryChosen'>Country</InputLabel>
                <NativeSelect value="" onChange={(e) => handleChange(e.target.value)}>
                    <option aria-label="None" value="" />
                    <option value="">Global</option>
                    {countries.map((country, index)=> {
                    return  <option key={index} value={country}>{country}</option>
                    })}
                </NativeSelect>
            </FormControl>
       </div>: null
    );       
}

export default AllCountries 