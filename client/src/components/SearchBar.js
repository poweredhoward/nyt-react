import React from "react";
// import { Link } from "react-router-dom"

const SearchBar = (props) =>{
    return(
        <div>

            <form>
                <label htmlFor="topic">Topic </label>
                <input name="topic" onChange={props.onchange}/>

                <label htmlFor="start">Start Year </label>
                <input name="start_year" onChange={props.onchange}/>

                <label htmlFor="end">End Year </label>
                <input name="end_year" onChange={props.onchange}/>

                <button type="submit" onClick={props.onclick}>Submit</button>
            </form>

        
        </div>
    )
}

export default SearchBar;