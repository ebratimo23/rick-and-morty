import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import { CardResident } from './components/CardResident'
import InfoLocation from './components/InfoLocation'

function App() {
  const [location, setLocation] = useState()
  const [search, setSearch] = useState('')


  console.log(location);

  useEffect(() => {
    let numberLocation 
    if (search === '') {
      numberLocation = Math.floor(Math.random() * (126 -1) + 1)
    } else{
      numberLocation = search
    }


    
      const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
    .then(res => setLocation(res.data))
    .catch(err => console.log(err))
  }, [search])
  

 


 const handleSubmit = e => {
  e.preventDefault()

  setSearch(e.target.search.value);
 }



  return (
    <div className="App">
      <header>
        <div className='img'></div>
      </header>

      <form onSubmit={handleSubmit}>
        <input id='search' type="text" />
        <button>Search</button>
      </form>
      
      <div className='container'>
       <InfoLocation location={location}/>
      </div>

       <div className='dashboard'>
        {
          location?.residents.map(url => (
            <CardResident
            key={url} 
            url={url}
            />
          ))
        }
       </div>
    </div>
  )
}

export default App
