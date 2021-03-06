import React from "react";

const Saved = props =>{
    console.log(props)
    return(
        <div>
            <h2>Saved Articles</h2>
            {
                props.articles.map((article, k) =>{
                    return( 
                        <div key={k} className="panel panel-default">
                        <div className="panel-heading">
                            <a href={article.url}><h3>{article.title}</h3></a>
                        </div>
                        <div className="panel-body">
                            <p>{article.snippet}</p>
                            <p>Published on {article.date.split("T")[0]}</p>

                            <button onClick={() => props.click(article.title)}> Delete </button>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Saved;