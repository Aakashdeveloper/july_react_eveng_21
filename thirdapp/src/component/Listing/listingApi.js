import React, {Component} from 'react';
import axios from 'axios';

const url = "https://developerfunnel.herokuapp.com/hotellist"

class Listing extends Component {
    constructor(props) {
        super()

        this.state={
            hotellist:''
        }
    }

    render(){
        return(
            <div>Listing</div>
        )
    }
    /*
    fetch(`${HotelUrl}${cityId}`, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotels:data})
        })
        */

    // call api to get hotel wrt to trip id 
    componentDidMount(){
        let tripId= this.props.match.params.id;
        axios.get(`${url}/${tripId}`)
        .then((res) => this.setState({hotellist:res.data}))
    }
}

export default Listing