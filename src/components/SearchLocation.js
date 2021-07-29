import axios from 'axios';
import React, { Component } from 'react'
import './SearchLocation.css'
const API_KEY = process.env.REACT_APP_API_KEY

export default class SearchLocation extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: ''
        }
    }
    
    handleChange = e =>{
        const { value } = e.target;
        this.setState({
            ...this.state, city: value
        });
    }
    
    componentDidMount() {
        axios({
            method: 'get',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${this.props.weatherData.location}&appid=${API_KEY}`
        })
        .then(res => this.props.onUpdateInitialState(res.data))
        .catch(err => console.log(err))
    }

    handleSubmit = e =>{
        e.preventDefault();
        axios({
            method: 'get',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_KEY}`
        })
        .then(res => this.props.onSetNewLocation(res.data))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value={this.state.city} 
                        onChange = {this.handleChange}
                        placeholder="Search by city name..."
                    />
                    <button><i className="fa fa-search fa-lg"></i></button>
                </form>  
            </div>
        )
    }
}