import React, { useEffect, useState } from 'react'
import { Gif } from './Gif'
import { Search } from './Search'

export const Home = () => {
  const [data, setData] = useState([])
  
  //Function to get data from API
  const getGifs = (search) =>{
    const APIKEY = 'JX6XhoxWKU3UQRX6wBYskVK6hLrb4SDh'
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${search}&limit=25&offset=0&rating=g&lang=en`
    fetch(url)
            .then(response => response.json())
            .then(data => setData(data.data));
  }  

  //Call to start API
  useEffect(() => {
        getGifs('demo')
    }, []) 

  return (
    <>
      <div className='container'>
        <Search searchGif={getGifs}/>
          <div className='gif__container'>
            {data && data.map(gif => <Gif key={gif.id} url={gif.url} img={gif.images.original.url} title={gif.title}/>)}
          </div>
      </div>
    </>
  )
}
