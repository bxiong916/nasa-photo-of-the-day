import React, {useState, useEffect} from 'react'
import axios from "axios";



function Data (){
const [Media, setMedia] = useState([]);

useEffect(() => {
  axios
  .get("https://api.nasa.gov/planetary/apod?api_key=bZq7dvX9tzei9EUf1T2t5ZY1vBwyXZGcgda4yg86&date=2020-07-02")
  .then(response => {
      console.log(response.data)
      setMedia(response.data)
    })
    .catch(err => {
      console.log('err')
    })
}, []);

return (
  <div className="App">
      <div>
    <h1>
      {Media.title} <span role="img" aria-label='go!'>🚀</span>!
    </h1>
    <h3>{Media.date}</h3>
    </div>
    <div><img alt="data" src={Media.hdurl}></img></div>
   <div> <p><span>Explanation: </span>{Media.explanation}</p> </div>
  </div>
);
}

export default Data;