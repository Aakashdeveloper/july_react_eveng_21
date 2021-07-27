import React, {Component} from 'react';
import axios from 'axios';
import BookingDisplay from './bookingDetails';

const url = ""

class ViewBooking extends Component {
    constructor(props){
        super(props)

        this.state={
            booking:''
        }
    }

    render(){
        return(
            <div>
                <BookingDisplay bookdata={this.state.booking}/>
            </div>
        )
    }

    //call api 
    componentDidMount(){
        axios.get(url).then((res) => {this.setState({booking:res.data})})
    }
}

export default ViewBooking;