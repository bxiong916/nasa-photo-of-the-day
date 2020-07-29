import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import MainData from "./MainData.js"
import Information from "./Information.js"
import Heading from "./Heading.js"

function App() {
  const [photo, setPhoto] = useState([])

useEffect(() => {
  axios
  .get("https://api.nasa.gov/planetary/apod?api_key=bZq7dvX9tzei9EUf1T2t5ZY1vBwyXZGcgda4yg86date=2020-07-28")
  .get("https://api.nasa.gov/planetary/apod?api_key=bZq7dvX9tzei9EUf1T2t5ZY1vBwyXZGcgda4yg86date=2020-07-27")
  .then(response => {
    console.log(photo);
    console.log(response);
    setDate(response.data.title)
    setTitle(response.data.title)
    setPhoto(response.data.url)
    setInformation(response.data.information)
  })
  .catch(error => {
    console.log("The data did not returned", error);
  });
}, []);



  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
