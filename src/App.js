import './App.css'

const Person = props => {
    return (
        <>
            <h4>Book Name: {props.bookname}</h4>
            <p>Released Date : {props.date}</p>
        </>
    )
}

const App = () => {
    const name = 'John'
    const isNameShowing = false

    return (
        <div className='App'>
            <Person bookname={"John's Career"} date={'10/12/21'} />
            <Person bookname={"Zawad's Career"} date={'10/12/21'} />
            <Person bookname={"Vai's Career"} date={'10/12/21'} />
            <Person bookname={"Rick's Career"} date={'10/12/21'} />
        </div>
    )
}

export default App
