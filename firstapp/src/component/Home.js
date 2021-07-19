import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import NewsDetails from './NewsDetails';
import JSON from './db.json';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state={
            news: JSON,
            filtered: JSON
        }
    }

    /*
    var a = [2,3,5,6,7,3,2,4,6,7,9,4]
    a.filter((data) => {return data>5})
    [6, 7, 6, 7, 9]
    */
    filterNews=(keyword) => {
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(keyword.toLowerCase()) >-1
        })
        this.setState({filtered:output})
    }

    render(){
        console.log(this.state.news)
        return(
            <>
                <Header userText={(data) => {this.filterNews(data)}}/>
                <NewsDetails newsdata={this.state.filtered} />
                <Footer year="2021" month="July"/>
            </>
        )
    }
}


export default Home;