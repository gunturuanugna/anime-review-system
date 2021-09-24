import React from 'react'
import AnimeCard from './AnimeCard';
function MainContent(props) {
    const mystyle = {
      color: "blue",
      top:"80px",
      padding:"87px",
      fontSize:"20px",
    };
    return (
        <main>
            
				{props.animeList.map(anime => (
                    
					<AnimeCard
						anime={anime}
						key={anime.mal_id} />
                   
				))}
            
                 {props.mainList.map(anime => (
                 
					<AnimeCard
						anime={anime}
						key={anime.mal_id} />
                   
				))}
                <p style={mystyle}>Coming soon.. :)</p>
            
		</main>
    )
}

export default MainContent;
