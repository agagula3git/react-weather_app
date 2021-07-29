import React, { Component } from 'react'
import './ShowData.css'

export default class ShowData extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    capitalizeDesc = str =>{
        let newStr = '';
        for(let i = 0; i < str.length; i++){
            newStr += i == 0 ? str[i].toUpperCase() : str[i]
        }
        return newStr;
    }

    render(){
        return(
            <div className="data-box">
                {this.props.weatherData.loading ? 
                    <p>Loading...</p> :
                    <div className="main-data">
                        <p id="name">{this.props.weatherData.location}</p>
                        <div className="main-temp"> 
                            <img 
                                src={`https://openweathermap.org/img/wn/${this.props.weatherData.icon}@2x.png`} 
                                alt="icon" 
                                width="150px"
                            />
                            <span>{(this.props.weatherData.temperature - 273.15).toFixed(0)}°C</span>
                        </div>
                        <p>{this.capitalizeDesc(this.props.weatherData.description)}</p>
                        <div className="extra-data">
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                <div className="extra-temp extra">
                                    <span class="iconify" data-icon="wi:thermometer" data-inline="false" width="30px"></span>
                                    <div>
                                        <p>FEELS LIKE</p>
                                        <span>{(this.props.weatherData.feels_like - 273.15).toFixed(0)}°C</span>
                                    </div>
                                </div>
                                <div className="extra-wind extra">
                                    <span class="iconify" data-icon="feather:wind" data-inline="false" width="70px"></span>                                
                                    <div>
                                        <p>WIND</p>
                                        <span>{(this.props.weatherData.wind * 3600/1000).toFixed(0)} km/h</span>
                                    </div>
                                </div>
                                <div className="extra-humidity extra">
                                    <span class="iconify" data-icon="wi-humidity" data-inline="false" width="50px"></span>
                                    <div>
                                        <p>HUMIDITY</p>
                                        <span>{this.props.weatherData.humidity}%</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", marginTop: "50px"}}>
                                <div className="extra-pressure extra">
                                    <span class="iconify" data-icon="wi:barometer" data-inline="false" width="50px"></span>
                                    <div>
                                        <p>PRESSURE</p>
                                        <span>{this.props.weatherData.pressure} mb</span>
                                    </div>
                                </div>
                                <div className="extra-visibility extra">
                                    <span class="iconify" data-icon="ic:baseline-visibility" data-inline="false" width="70px"></span>
                                    <div>
                                        <p>VISIBILITY</p>
                                        <span>{this.props.weatherData.visibility/1000} km</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}