import axios from "axios";
import React, { useState, useEffect, } from "react";
import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import Footer from "./Footer";
 
export default function WeatherForecast(props){
 //console.log(props)
 let[loaded, setLoaded]=useState(false);
 let[forecast, setForecast]=useState(" ");

 useEffect(() =>{
setLoaded(false);
 }, [props.coordinates]);


 function handleResponse(response){
   console.log(response.data)
   setForecast(response.data.daily)
   setLoaded(true);
 }
 if(loaded){
   //console.log(forecast)
    return (
    <div className="WeatherForecast">
      <div className="WeatherForecast">
       <div className="card" style={{ width: "30rem" }} >
        <div className="SecondCard"></div>
       
        <div className="container">
        <div className="row" id="first-forecast"> </div>
         <div className="col">
        {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
               
                <div className="col" key={index}>
                 <em>  <WeatherForecastDay data={dailyForecast} /> </em>
                </div>
                
               
              );
              } else {
              return null;
            }
          })}
          </div>
     </div>

     </div>
     <Footer />
     </div>
     </div>
      );
}else{
let latitude=  props.coordinates.lat ;
 let longitude= props.coordinates.lon;
 let apiKey="4b3a638fb4d48006da8ec9048f3f42e3";
  let url= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
axios.get(url).then(handleResponse);
 
return null;
 }   }
