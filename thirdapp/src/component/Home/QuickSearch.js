import React, {Component} from 'react';
import QuickDisplay from './QuickSearchDisplay';

const url = "https://developerfunnel.herokuapp.com/booking"

class QuickSearch extends Component {
    constructor(props) {
        super(props);

        this.state={
            tripType:''
        };
    }
    render() {
        return(
           <QuickDisplay tripdata={this.state.tripType}/>
        )
    }

    //api call 
    componentDidMount(){
        fetch(url, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({tripType:data})
        })
    }
}

export default QuickSearch;