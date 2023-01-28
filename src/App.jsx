import React, {useState, useEffect} from 'react'
import './App.css';

const App = () => {
  const [data, setData] = useState([])
  console.log('load each time the components render')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban')
      console.log(`here's what the fetch request returns:`, response)

      if (response.status === 200) {
        const dataJson = await response.json()
        console.log(`the jsonified response: `, dataJson)
        setData(dataJson)
      }
    }

    fetchData()
  }, [])

  console.log(`the info array in the state:`, data)

  return <div>hello world</div>
}


export default App;
