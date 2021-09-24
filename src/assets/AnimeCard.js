import React from 'react'

function AnimeCard({anime}) {
	return (
		<article className="anime-card">
			<a 
				href={anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img class="anime-list"
						src={anime.image_url} 
						alt="Anime Image" />
				</figure>
				<h4 class="anime-title">{ anime.title }</h4>
			</a>
		</article>
	)
}

export default AnimeCard;