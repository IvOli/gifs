import React from 'react'

export const Gif = ({url, img, title}) => {
  return (
    <div className='gif'>
        <img className='gif__img' src={img}/>
        <p className='gif__text'>{title}</p>
        <div className='gif__link'><a target="_blank" href={url}>Go somewhere</a></div>
    </div>
  )
}
