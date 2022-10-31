import './App.css'
import { useState, useEffect } from 'react'

const Person = props => {
    return (
        <>
            <h4>Book Name: {props.bookname}</h4>
            <p>Released Date : {props.date}</p>
        </>
    )
}

const App = () => {
    const [counter, setCounter] = useState(20) //name of the state, setter of the state

    // useEffect(() => {
    //     setCounter(100)
    // }, [])

    return (
        <div className='App'>
            <Person bookname={"John's Career"} date={'10/12/21'} />
            <Person bookname={"Zawad's Career"} date={'10/12/21'} />

            <button onClick={() => setCounter(prevCount => prevCount - 1)}>-</button>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(prevCount => prevCount + 1)}>+</button>
        </div>
    )
}

export default App
