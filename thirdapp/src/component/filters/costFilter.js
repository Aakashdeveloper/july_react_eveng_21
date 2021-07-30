import React,{Component} from 'react';
import axios from 'axios';

const url = "https://developerfunnel.herokuapp.com/hotellist";

class CostFilter extends Component {
    filterCost = (event) => {
        let cost = (event.target.value).split('-');
        let tripId = sessionStorage.getItem('tripId');
        let lcost = cost[0]
        let hcost = cost[1]
        let costUrl;
        if(costUrl == ""){
            costUrl = `${url}/${tripId}`
        }else{
            costUrl = `${url}/${tripId}?hcost=${hcost}&lcost=${lcost}`
        }

        axios.get(costUrl)
            .then((response) => {this.props.costPerType(response.data)})
    }
    render(){
        return(
            <div onChange={this.filterCost}>
                <center>Cost Filter</center>
                <div>
                    <label className="radio">
                        <input type="radio" value="" name="filter"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1000-3000" name="filter"/>1000-3000
                    </label>
                    <label className="radio">
                        <input type="radio" value="3001-6000" name="filter"/>3001-6000
                    </label>
                    <label className="radio">
                        <input type="radio" value="6001-9000" name="filter"/>6001-9000
                    </label>
                    <label className="radio">
                        <input type="radio" value="9000-15000" name="filter"/>9000-15000
                    </label>
                </div>
            </div>
        )
    }
}


export default CostFilter;