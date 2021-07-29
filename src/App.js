import { connect } from 'react-redux'
import './App.css';
import SearchLocation from './components/SearchLocation'
import ShowData from './components/ShowData'
import { makeRequest, setNewLocation, updateInitialState } from './redux/actions';

function App(props){
  return(
    <div className="App">
      <SearchLocation 
        weatherData = {props.weatherData} 
        onMakeRequest = {props.makeRequest}
        onUpdateInitialState = {props.updateInitialState}
        onSetNewLocation = {props.setNewLocation}
      />
      <ShowData
        weatherData = {props.weatherData}
      />
    </div>
  )
}

const mapStateToProps = state =>{
  return{
    weatherData: state
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    makeRequest: () => dispatch(makeRequest()),
    updateInitialState: (weatherData) => dispatch(updateInitialState(weatherData)),
    setNewLocation: (weatherData) => dispatch(setNewLocation(weatherData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
