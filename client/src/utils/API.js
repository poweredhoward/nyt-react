import axios from "axios";
import request from "request"
// const url = "http://localhost:3001/"

export default {
    search: function(query, start, end) {
        request.get ({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        qs: {
        'api-key': "ec9386b2270d431591c608dd2e1d96e9",
        'q': query,
        'begin_date': start,
        'end_date': end
        },
    }, function(err, response, body) {
        body = JSON.parse(body);
        console.log(body);
        return body;
    })
}
}