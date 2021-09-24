import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { FiAlignJustify} from "react-icons/fi";
const Hero = (props) => {
    return (
        <section  className="hero">
           <nav>
           <h3>ARS</h3>
           <form onSubmit={props.HandleSearch}>
          <div class="input-group rounded">
           <div class="form-outline">
           <input 
           type="search" 
           id="form1" class="form-control rounded" 
           placeholder="Search for an anime..." 
           value={props.search}
           onChange={e => props.SetSearch(e.target.value)}
           aria-label="Search" aria-describedby="search-addon"
           />
          </div>
         </div>
         </form>
         <button type="submit"	onClick={props.HandleSearch} class="btn btn-primary">
              <BsSearch id="search"/>
          </button>
             <span id="pro">ARS PRO</span>
            <span id="btn" onClick={props.handleLogout}>Logout</span>
           </nav>
        </section>
        
    )
}

export default Hero;
