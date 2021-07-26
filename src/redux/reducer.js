const initialState = {
    location: 'Sarajevo',
    loading: true,
    temperature: 0,
    feels_like: 0,
    description: '',
    wind: 0,
    visibility: 0,
    pressure: 0,
    icon: '', 
    humidity: 0
}

export function reducer(state = initialState, action){
    const { payload } = action;
    switch(action.type){
        case 'MAKE_REQUEST':
            return{
                ...state,
                loading: true
            }
        case 'UPDATE_INITIAL_STATE':
            return{
                ...state,
                loading: false,
                temperature: payload.main.temp,
                feels_like: payload.main.feels_like,
                description: payload.weather[0].description,
                wind: payload.wind.speed,
                visibility: payload.visibility,
                pressure: payload.main.pressure,
                icon: payload.weather[0].icon,
                humidity: payload.main.humidity
            }
        case 'SET_NEW_LOCATION':
            console.log(payload.main)
            return{
                loading: false,
                location: payload.name,
                temperature: payload.main.temp,
                feels_like: payload.main.feels_like,
                description: payload.weather[0].description,
                wind: payload.wind.speed,
                visibility: payload.visibility,
                pressure: payload.main.pressure,
                icon: payload.weather[0].icon,
                humidity: payload.main.humidity
            }
        default:
            return state
    }  
}