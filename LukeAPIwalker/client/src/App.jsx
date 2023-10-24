import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    peoplePlanet: '',
    id: 0
  })
  const [apiData, setApiData] = useState({})

  // useEffect(() => {
  //   axios.get(`https://swapi.dev/api/${formData.peoplePlanet}/${formData.id}`)
  //   .then((res)=>{
  //     setApiData(res.data.result)
  //     console.log(res.data.results)
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  // })

  const handleSearch = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.get(`https://swapi.dev/api/${formData.peoplePlanet}/${formData.id}`)
    .then((res)=>{
      setApiData(res.data)
      console.log('results: ', res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    console.log(formData)
  }

  return (
    <div>
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <label>Search For: </label>
            <select name="peoplePlanet" value={formData.peoplePlanet} onChange={handleSearch}>
              <option selected value="">--- select an option ---</option>
              <option value="people">People</option>
              <option value="planets">Planet</option>
            </select>
          </div>
          <div>
            <label htmlFor="">ID: </label>
            <input type="number" value={formData.id} name='id' onChange={handleSearch}/>
          </div>
          <button>Search</button>
      </form>
      </div>
          <p>Name: {apiData.name}</p>
          <p>{apiData.terrain}</p>
          <p>{apiData.surface_water}</p>
          <p>{apiData.population}</p>
          <p>{apiData.skin_color}</p>
          <p>{apiData.hair_color}</p>
          <p>{apiData.eye_color}</p>

    </div>
  )
}

export default App
