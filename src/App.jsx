import React, {useState, useEffect} from 'react'
import Cast from './components/Cast'
import Creatives from './components/Creatives'
import './App.css'

const App = () => {
  const [data, setData] = useState([])
  console.log('load each time the components render')

  const CreativesList = (data) => {
    const creativePeople = []
    data.included.forEach((relationship) => {
      if (relationship.type === "creatives") {
        creativePeople.push({
          name: relationship.attributes.name,
          role: relationship.attributes.role,
        })
      }
    })
    return creativePeople;
  }

  const CastList = (data) => {
    const castPeople = []
    data.included.forEach((relationship) => {
      if (relationship.type === "castRoles") {
        castPeople.push({
          name: relationship.attributes.name,
          role: relationship.attributes.role,
        })
      }
    })
    return castPeople;
  }

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
            shortDescription: titleAndDescription.attributes.shortDescription.replace('<p>', '').replace('</p>',''),
            creatives: CreativesList(dataJson),
            cast: CastList(dataJson)
          }
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
      <h3>Creatives</h3>
      <Creatives creatives={data.creatives} />
      <h3>Cast</h3>
      <Cast cast={data.cast} />
    </div>
  )
}


export default App;
