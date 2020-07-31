import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Data from "./Data.jsx";

function App() {
  
  const [photo, setPhoto] = useState([])
  const [date, setDate] = useState([])
  const [explanation, setexplanation] = useState ([]);
  const [title, setTitle] = useState ([]);

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=bZq7dvX9tzei9EUf1T2t5ZY1vBwyXZGcgda4yg86&date=2020-07-02")
    .then( response => {
      console.log(photo);
      setDate(response.data.date)
      setTitle(response.data.title)
      setPhoto(response.data.url)
      setexplanation(response.data.explanation)
    })
    .catch( error => {
      console.log("Data not returned", error);
    });
   } , );
   return (
    <section className = "App">

    <div className = "App-logo"></div>  
    <div className = "App-header">NASA Photo of the Day
    <div className = "App-link">The App Link</div>
    <div className = "outerEyeOpen"> {title} </div>
    <img src= {photo} alt= "NPOD"/>
    <div className = "date"> {date}</div>

    <div className = "NPOD"> 


    </div>





    <article className= "explanation">{explanation}</article>
    </div>
  );
    <div className = "outerEyeClose"></div>

  </section>
   );
}

export default App;