import React,{Component} from 'react';
import axios from 'axios';

const url = "https://developerfunnel.herokuapp.com/hotellist";

class RoomFilter extends Component {
    filterRoom = (event) => {
        let roomId = event.target.value;
        let tripId = sessionStorage.getItem('tripId');
        let roomUrl;
        if(roomId == ""){
            roomUrl = `${url}/${tripId}`
        }else{
            roomUrl = `${url}/${tripId}?roomtype=${roomId}`
        }

        axios.get(roomUrl)
            .then((response) => {this.props.roomPerType(response.data)})
    }
    render(){
        return(
            <div onChange={this.filterRoom}>
                <center>Room Filter</center>
                <div>
                    <label className="radio">
                        <input type="radio" value="" name="filter"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="filter"/>Deluxe Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="filter"/>Premium Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="filter"/>Travel Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="filter"/>Semi Delux Room
                    </label>
                </div>
            </div>
        )
    }
}


export default RoomFilter;