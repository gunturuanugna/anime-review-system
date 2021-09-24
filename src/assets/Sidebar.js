import React from 'react';
import '../App.css';
function Sidebar({ topAnime }) {
     const mystyle = {
      color: "white",
      top:"4px",
      padding:"10px",
    };
     const myStyle = {
      float:"left",
      display:"block",
      width:"110px",
    };
    const side={
      top:"100px",
      width:"348px",
      height:"107px",
      margin:"10px",
      backgroundColor:"#000000",
    };
    return (

       <div class="aside">
       <p id="top">Top Anime</p>
				{topAnime.map(anime => (
                     <div id="side-top" style={side}>
					<a href={anime.url} 
						target="_blank"
						key={anime.mal_id} 
						rel="noreferrer">
                         <figure>
					    <img id="side-img"
						src={anime.image_url} 
						alt="Anime Image"
                        style={myStyle} />
				    </figure>
				     <span>
                     <h5 style={mystyle}>{ anime.title }</h5>
                     </span>
					</a>
                    </div>
				))}
		</div>
    )
}

export default Sidebar
;