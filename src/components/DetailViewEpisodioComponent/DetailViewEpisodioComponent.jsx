import React from 'react'
import "./DetailViewEpisodioComponent.css"

export const DetailViewEpisodioComponent = ({id, name, characters, created, air_date, episode}) => {
  return (
  //   <div >
  //   <ul>
  //     <li>{name}</li>
  //     <li>{created}</li>
      
  //     <ul>
  //     {
  //       //  characters.map(character =><li>{character}</li>)         
  //     }
  //     </ul>
  //   </ul>

  // </div>

<ul class="tilesWrap">
	<li>
		<h2>{episode}</h2>
		<h3>{}</h3>
		<p>
			Lorem Ipsum is simply dummy text of the printing and typesetting   
			industry. Lorem Ipsum has been the industry's standard dummy text ever 
			since the 1500s.
		</p>
		<button>Read more</button>
	</li>
</ul>
  )
}
