import React, {useState, useEffect} from 'react'
import './App.css';

const App = () => {
  const [data, setData] = useState([])
  console.log('load each time the components render')

  useEffect(() => {
    const fetchData = () => {
      fetch('https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban')
      .then((response) => {
        console.log(`here's what the fetch request returns:`, response)
        return response.json()
      })
      .then((data) => {
        console.log(`the jsonified response: `, data)
        return setData(data)
      })
    }

    fetchData()
  }, [])

  console.log(`the info array in the state:`, data)

  return <div>hello world</div>
}


export default App;
