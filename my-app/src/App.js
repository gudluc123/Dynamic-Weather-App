import React , {useState} from 'react'
import ShowTemp from './ShowTemp'

import axios from 'axios'

function App() {

  const [city, setCity]= useState(" ")

  const [data, setData]= useState({

  description: "",
  temp: 0,
  temp_max:0,
  temp_min:0,
  humidity:0,
  sunrise:0,
  sunset:0,
  country:""




  })

const handleClick =async ()=>{

axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=766a38237d55136bdeffa82ef88667be`)
.then((res)=>{

  setData({

    description: res.data.weather[0].description,
    temp: res.data.main.temp,
    temp_max:res.data.main.temp_max,
    temp_min:res.data.main.temp_min,
    humidity:res.data.main.humidity,
    sunrise:res.data.sys.sunrise,
    sunset:res.data.sys.sunset,
    country:res.data.sys.country

  })
})

}


  return (
    <>
    <div className='container text-center my-3'>

      <h1>Today Weather</h1>

      <input type = "text" className='from-control' value= {city}  onChange ={(e)=>{

       setCity(e.target.value)
       
      }}/>

      <button className='btn btn-primary mx-2' type='submit' onClick={handleClick}>get temp</button>
      
    </div>
    <ShowTemp text ={data}></ShowTemp>
   </>
  )
}

export default App
