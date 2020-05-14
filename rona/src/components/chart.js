import React, {useEffect,useState} from 'react'
import {getDailyDataGlobal} from '../getApiData/'



const Graphs = (props)=>{
const [data,setData]=useState({})
useEffect(()=>{
const fetchGlobal= async ()=>{
    setData(await getDailyDataGlobal())
    console.log(data)
    };
fetchGlobal()
},[setData])
    return(
        <div>
            <h1>situation in {props.country}</h1>
          
        </div>
    )
}

export default Graphs