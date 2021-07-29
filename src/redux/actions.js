import axios from 'axios'

export function makeRequest(){
    return {
        type: 'MAKE_REQUEST'
    }
}

export function updateInitialState(weatherData){
    return {
        type: 'UPDATE_INITIAL_STATE',
        payload: weatherData
    }
}

export function setNewLocation(weatherData){
    return {
        type: 'SET_NEW_LOCATION',
        payload: weatherData
    }
}