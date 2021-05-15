import React from "react";
import FormattedDate from "./FormattedDate";
import "./FirstCard.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInformations(props){
    return(
    <div className="WeatherInformations">
     <div className="cardFirst" style={{ width: "30rem" }} >
        <div className="card-body-first">
          <p>
            {" "}
            <small>Current city:</small>
            <em>{props.data.city}</em>
          </p>
          <h5 className="card-title" id="card-title-first">
            <FormattedDate date={props.data.date} />
          </h5>
          <br />
          <WeatherIcon code={props.data.icon} size={78} />
          <br />
          <WeatherTemperature  celsius={props.data.temperature} />
          <p id="primary-description"></p>
          <p className="wind-speed" id="wind-speed">Wind speed: {Math.round(props.data.wind)} km/h</p>
          <p className="humidity" id="humidity">Humidity: {props.data.humidity}%</p>
          <h6 className="card-subtitle-first">{ props.data.description} </h6>
          <p id="note"></p>
          <p id="time">
            <small>Last updated at </small> <FormattedDate date={props.data.date}/>
          </p>
    </div>
    </div> 
    </div>
    )
    
}