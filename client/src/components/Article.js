import React from "react";

const Article = props => {
    var title = props.title;
    var date = props.date;
    var url = props.url;
    var snippet = props.snippet;
    console.log("result props");
    console.log(props)
    return (
        <div className="panel panel-default">
        <div className="panel-heading">
            <a href={url}><h3>{title}</h3></a>
        </div>
        <div className="panel-body">
            <p>{date.split("T")[0]}</p>
            <p>{snippet}</p>

            <button onClick={() => props.savefunction({t:{title}, d:{date}, u:{url}, s:{snippet}})}>Save</button>
            </div>
        </div>
    )
}

export default Article;