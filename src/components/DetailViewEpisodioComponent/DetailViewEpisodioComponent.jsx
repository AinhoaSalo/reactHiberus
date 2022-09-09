import React from 'react'

export const DetailViewEpisodioComponent = ({id, name, characters, created}) => {
  return (
    <div >
    <ul>
      <li>{name}</li>
      <li>{created}</li>
      
      <ul>
      {
        //  characters.map(character =><li>{character}</li>)         
      }
      </ul>
    </ul>

  </div>
  )
}
