import axios from 'axios'

export function makeRequest(){
    return {
        type: 'MAKE_REQUEST'
    }
}

export function updateInitialState(weatherData){
    console.log(weatherData.main)
    return {
        type: 'UPDATE_INITIAL_STATE',
        payload: {
            
        }

    }
}

export function setNewLocation(weatherData){
    console.log(weatherData.main.temp)
    return {
        type: 'SET_NEW_LOCATION',
        payload: weatherData
    }
}