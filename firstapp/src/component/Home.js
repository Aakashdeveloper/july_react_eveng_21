import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import NewsDetails from './NewsDetails';
import JSON from './db.json';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state={
            news: JSON
        }
    }

    render(){
        console.log(this.state.news)
        return(
            <>
                <Header userText={(data) => {console.log(`in home ${data}`)}}/>
                <NewsDetails newsdata={this.state.news} />
                <Footer year="2021" month="July"/>
            </>
        )
    }
}


export default Home;