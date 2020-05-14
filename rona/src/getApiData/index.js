

export const getCountries=async () =>{

    try {
      const response=async ()=> await (await fetch('https://covid19.mathdro.id/api/countries')).json()
      const {countries}= await response()
      const choices= countries.map(country=>country.name)
      return choices
    } catch (error) {
      console.error(error)
    }
  }
  
  
  export const getDailyDataGlobal=async () =>{
    try {
     const response=async()=> await(await fetch('https://covid19.mathdro.id/api')).json()
     const dailyData=await response();
     console.log(dailyData)
     return dailyData
    } catch (error) {
      console.error(error)
    }
  
  }
  
  export const getCountryData=async (country)=>{
    try {
      const response= async()=> await( await fetch(`https://covid19.mathdro.id/api/countries/${country}`)).json()
      const countryData =await response()
      return countryData
    } catch (error) {
      console.error(error)
    }
  }