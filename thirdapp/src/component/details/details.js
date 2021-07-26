import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails";

class Details extends Component{
    constructor(props){
        super(props);

        this.state={
            details:''
        }
    }

    render(){
        //let details = this.state.details
        let {details} = this.state
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{details.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-responsive" src={details.thumb} style={{height:400,width:1500}}/>
                            </div>
                            <div className="col-md-6">
                                <h3>
                                    <span className="label label-danger">
                                        {details.locality}
                                    </span>
                                </h3>
                                <h3>
                                    <span className="label label-success">
                                        {details.address}
                                    </span>
                                </h3>
                                <h3>
                                    <span className="label label-primary">
                                        Rs. {details.cost}
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <hr/>
                        <Tabs>
                            <TabList>
                                <Tab>Details</Tab>
                                <Tab>Contact</Tab>
                                <Tab>Rooms</Tab>
                                <Tab>Aminities</Tab>
                            </TabList>

                            <TabPanel>
                                <h2>{details.name}</h2>
                                <p>{details.name} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            </TabPanel>
                            <TabPanel>
                                <span className="label label-success">
                                        {details.address}
                                </span>
                                <h4>Phone No: 7567565633</h4>
                            </TabPanel>
                            <TabPanel>
                                <h2></h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Non Smoking</h2>
                                <h2>Hot Water</h2>
                                <h2>In Room Service</h2>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }


     // call api to get hotel wrt to hotel id 
    async componentDidMount(){
        let hotelId= this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelId}`)
        this.setState({details:response.data[0]})
    }
}



export default Details;