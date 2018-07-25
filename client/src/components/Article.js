import React from "react";

const Article = props => {
    var title = props.title;
    var date = props.date;
    var url = props.url;
    console.log(props)
    return (
        <div className="panel panel-default">
        <div className="panel-heading">
            <h3>{title}</h3>
        </div>
        <div className="panel-body">
            <p>{date.split("T")[0]}</p>
            <p>{url}</p>

            <button onClick={() => props.savefunction({t:{title}, d:{date}, u:{url}})}>Save</button>
            </div>
        </div>
    )
}

export default Article;