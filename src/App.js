import React from 'react';
import Navbar from './Components/Navbar'
import axios from 'axios'
class App extends React.Component{
  
  constructor(){
    super()
    this.state={
      country:"",
      cityShow:"",
      cityName : "",
      image:"",
      conditionText:"",
      temper_inC:""
    }
  }

  handleCityName = e =>{
    this.setState({
      cityName:e.target.value
    })
  }

  handleSubmit =e=>{
    e.preventDefault()
    const API_KEY = "841dd07e053b42dcb77204052212602"
    const city = this.state.cityName
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    axios.get(url)
    .then(res=>{
      this.setState({
        country:res.data.location.country,
        cityShow:res.data.location.name,
        image:res.data.current.condition.icon,
        conditionText:res.data.current.condition.text,
        temper_inC:res.data.current.temp_c
      })
    })
    .catch(e=>console.log(e))
  }

  render(){
    return(
      <div className="bg-light">
        <div className="container mt-5">
          <div className="container">
            <Navbar />
            <div className="jumbotron jumbotron-fluid">
              <form className="form-inline" onSubmit={this.handleSubmit}>
                  <div className="form-group mx-sm-3 mb-5">
                      <label htmlFor="inputPassword2" className="sr-only">City</label>
                      <input name="city" value={this.state.cityName} type="text" onChange={this.handleCityName} className="form-control" id="inputPassword2" placeholder="Enter city name" />
                  </div>
                  <button type="submit" className="btn btn-primary mb-5">Show data</button>
              </form>
              <div className="container">
                <img src={this.state.image} alt="Weather condition"/>
                <h5 className="display-5">Country: {this.state.country}</h5>
                <p className="display-5">City: {this.state.cityShow}</p>
                <p className="lead">Weather Condition is: {this.state.conditionText}</p>
                <p className="lead"> temperature in celcius: {this.state.temper_inC} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;