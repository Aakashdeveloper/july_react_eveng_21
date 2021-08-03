import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom'

class Header extends Component  {

    constructor(props){
        super(props)

        this.state={
            username:'',
            imageUrl:''
        }
    }

    conditionalHeader = () => {
        if(sessionStorage.getItem('username') == null){
            return(
                <li>
                    <a href="https://github.com/login/oauth/authorize?client_id=930f92e500db2f4d357c">
                        Login With Github
                    </a>
                </li>
            )
        }else{
            return(
                <li>
                    <a>
                        <img src={this.state.imageUrl} style={{height:50, width:50}}/>
                        {sessionStorage.getItem('username')}
                    </a>
                </li>
            )
        }
    }
    render(){
        return(
            <div>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">Developer Funnel</a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            {this.conditionalHeader()}
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    //pass code to backend 
    componentDidMount(){
        if(this.props.location.search){
            const code = (this.props.location.search).split('=')[1];
            if(code){
                let requestData={
                    code:code
                }
                fetch('http://localhost:9900/oauth',{
                    method: 'POST',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestData)
                })
                .then((res)=> res.json())
                .then((data) => {
                    console.log(data)
                    var user = data.name;
                    var img = data.avatar_url;
                    sessionStorage.setItem('username',user)
                    this.setState({username:user, imageUrl:img})
                })
            }
        }
    }
    
}

export default withRouter(Header)