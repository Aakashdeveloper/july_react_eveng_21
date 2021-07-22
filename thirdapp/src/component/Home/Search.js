import React, {Component} from 'react';
import './Search.css';

const CityUrl = "https://developerfunnel.herokuapp.com/location";
const HotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component {
    constructor(props) {
        super(props);
        console.log(">>>>>i am inside constructor")
        this.state={
            location:'',
            hotels:''
        };
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return (
                    <option value={item._id}>
                        {item.city_name}
                    </option>
                )
            })
        } 
    }

    renderHotel = (data) => {
        if(data){
            return data.map((item) => {
                return (
                    <option value={item._id}>
                        {item.name} | {item.locality}
                    </option>
                )
            })
        } 
    }

    handleCity = (event) => {
        const cityId = event.target.value;
        fetch(`${HotelUrl}${cityId}`, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotels:data})
        })
    }
    
    render() {
        console.log(">>>>>i am inside render")
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCity}>
                        <option>----SELECT CITY----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="hotelDropDown">
                        <option>----SELECT HOTEL----</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
                </div>
            </div>
        )
    }

    //on page load if we want to call api 
    componentDidMount(){
        console.log(">>>>>i am inside componentDidMount")
        // we get the data nd update the state
        fetch(CityUrl, {method:'GET'})
        // return the promise
        .then((res) => res.json())
        // get the data
        .then((data) => {
            // update data in state
           this.setState({location:data})
        })
    }
}

export default Search;