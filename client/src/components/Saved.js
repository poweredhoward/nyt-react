import React from "react";

const Saved = props =>{
    console.log(props)
    return(
        <div>
            <h2>Saved Articles</h2>
            {
                props.articles.map((article, k) =>{
                    return( 
                        <div key={k}>
                            <h3>{article.title}</h3>
                            <p>{article.url}</p>
                            <p>{article.date.split("T")[0]}</p>

                            <button onClick={() => props.click(article.title)}> Delete </button>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Saved;