import React,{Fragment,Component} from 'react';
import './header.css';

class Header extends Component{
    constructor(){
        super()

        this.state={
            title:'My React',
            keyword:'User Text Here'
        }
    }
    
    handleChange = (event) => {
        //console.log(event.target.value)
        this.setState({keyword: event.target.value?event.target.value:'User Text Here'})
        // passing data to home
        this.props.userText(event.target.value)
    }

    render(){
        console.log(">>>>i m in render")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white'}}>{this.state.keyword}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        ) 
    }
}

export default Header;

