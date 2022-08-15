import React from 'react'
import useFetch from '../hooks/useFetch'

export const CardResident = ({url}) => {
    const resident = useFetch(url)
    
  return (
    <article className='cards'>
      <header className='header'>
        <img src={resident?.image} alt="" />
        <span className='status'>{resident?.status}</span>
      </header>
      <main className='main'>
        <h3>{resident?.name}</h3>
        <ul>
          <li><span>Species: </span>{resident?.species}</li>
          <li><span>Origin: </span>{resident?.origin.name}</li>
          <li><span>Episode: </span>{resident?.episode.length}</li>
        </ul>
      </main>
    </article>
  )
}
