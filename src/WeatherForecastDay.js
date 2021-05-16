import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
    function day(){
let date= new Date(props.data.dt * 1000)
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day= date.getDay();
    
return days[day];
}
    return(

        <div className="WeatherForecastDay">
         <div className="WeatherForecast-day">{day()}</div> 
        <WeatherIcon code={props.data.weather[0].icon} size={50} />
        <div className="WeatherForecast-temperatures">
          <span className="MaxTemperature"> {Math.round(props.data.temp.max)}℃</span>
          <span className="MinTemperature">{Math.round(props.data.temp.min)}℃</span>
          
        </div>
 
      </div> 
    )}