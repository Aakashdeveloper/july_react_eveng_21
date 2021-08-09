import React,{useState, useEffect} from 'react';
import Display from './DisplayComponent'

const url = "https://developerfunnel.herokuapp.com/location"

function HooksComponent(){
    const [title] = useState({"name":'React Hooks'});
    const [count, setCount] = useState(0);
    const [counta, setCounta] = useState(0);
    const [city, setCity] = useState()


    const updateCount = () => {
        setCount(count+1);
    }

    useEffect(()=>{
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setCity(data)
            })
    })

    return(
        <div>
            <h1>{title.name}</h1>
            <h1>{count}</h1>
            <button onClick={updateCount}>Counter</button>
            <h1>{counta}</h1>
            <button onClick={() => {setCounta(counta+1)}}>Counter1</button>
            <Display mycity={city}/>
        </div>
    )
}

export default HooksComponent;