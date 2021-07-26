import React, {Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';

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
            <div className="row">
                <div className="col-md-2">
                    Filter Here
                </div>
                <div className="col-md-10">
                    <ListingDisplay listdata={this.state.hotellist}/>
                </div>
            </div>
        )
    }


    // call api to get hotel wrt to trip id 
    componentDidMount(){
        let tripId= this.props.match.params.id;
        axios.get(`${url}/${tripId}`)
        .then((res) => this.setState({hotellist:res.data}))
    }
}

export default Listing