import React, {Component} from 'react';
import UserDisplay from './UserDisplay';

const url = "https://developerjwt.herokuapp.com/api/auth/users";

class UserList extends Component {
    constructor(props){
        super(props)

        this.state={
            users:''
        }
    }

    render(){
        if(sessionStorage.getItem('ltk') === null){
            this.props.history.push('/login')
        }
        if(sessionStorage.getItem('ltk') !== null && sessionStorage.getItem('rtk') !== 'admin'){
            this.props.history.push('/profile')
        }
        return(
            <div>
                <UserDisplay userdata={this.state.users}></UserDisplay>
            </div>
        )
    }

    //callapi 
    componentDidMount(){
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            this.setState({users:data})
        })
    }
}

export default UserList