import React, { useState } from 'react'

export const Search = ({searchGif}) => {
  const [search, setSearch] = useState('')

  const handleChange = (e) =>{
    setSearch(e.target.value)
    searchGif(e.target.value)
  }

  const handleClick = (e) => {
      e.preventDefault()
      searchGif(search)
  }


  return (
    <div className='search'>
      <h1 className='search__title'>App Gifs</h1>
      <form onChange={handleChange} className='search__form'>
        <button onClick={handleClick} className='search__button'>Search Gifs</button>
        <input placeholder='search gif'/>
      </form>
    </div>
  )
}
