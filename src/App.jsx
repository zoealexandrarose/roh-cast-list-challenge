import React, {useState, useEffect} from 'react'
import './App.css';

const App = () => {
  const [data, setData] = useState([])
  console.log('load each time the components render')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban')
        console.log(`here's what the fetch request returns:`, response)

          const dataJson = await response.json()
          console.log(`the jsonified response: `, dataJson)
          const titleAndDescription = dataJson.data

          const apiDataObject = {
            title: titleAndDescription.attributes.title,
            shortDescription: titleAndDescription.attributes.shortDescription.replace('<p>', '').replace('</p>','')
          };
          setData(apiDataObject);
      } catch (errors) {
        console.log(errors)
      }
    }

    fetchData()
  }, [])

  console.log(`the info array in the state:`, data)

  return (
    <div className='App'>
      <h1>{data.title}</h1>
      <p>Date: 10/3/2023</p>
      <p>{data.shortDescription}</p>
    </div>
  )
}


export default App;
