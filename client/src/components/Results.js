import React from "react";
import Article from "./Article";

const Results = props => {
    
    return(
        <div >
            <h2>Results</h2>
            {
                props.results.map( article =>{
                    return <Article 
                    title={article.headline.main}
                    date={article.pub_date}
                    url={article.web_url}
                    snippet={article.snippet}
                    savefunction={props.savefunction}
                    />
                }
                )
            }
        </div>
    )
}

export default Results;