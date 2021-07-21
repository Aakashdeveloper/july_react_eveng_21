import React, {Component} from 'react';
import './Search.css';

const CityUrl = "https://developerfunnel.herokuapp.com/location";

class Search extends Component {
    constructor(props) {
        super(props);
        console.log(">>>>>i am inside constructor")
        this.state={
            location:''
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
                    <select className="locationDropDown">
                        <option>----SELECT CITY----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="hotelDropDown">
                        <option>----SELECT HOTEL----</option>
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