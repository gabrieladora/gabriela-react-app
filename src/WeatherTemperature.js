import React, {useState} from "react";

export default function WeatherTemperature(props){
    const[unit, setUnit]= useState("celsius")

    function convertFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function convertCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius") {
        return(
<div className="WeatherTemperature">
     <strong id="temperature"> {Math.round(props.celsius)} </strong>
      <span className="units">
            <span id="celsius-link" className="active"> ℃ |{" "}</span> 
            <a href="/" id="fahrenheit-link" onClick={convertFahrenheit} > ℉{" "} </a>
          </span>

</div>
 ) } else{
     let fahrenheit= (props.celsius * 9/5 )+ 32
     return(
    <div className="WeatherTemperature">
     <strong id="temperature"> {Math.round(fahrenheit)} </strong>
      <span className="units">
            <a href="/" id="celsius-link" className="active" onClick={convertCelsius} > ℃ |{" "} </a>
            <span id="fahrenheit-link"  > ℉{" "} </span>
</span> </div>
)

}
}
