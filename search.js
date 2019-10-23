const client = require('./connection');
module.exports = function(query){
    return new Promise((res, rej)=>{

        client.search({
            index: 'posts',
            type: 'post',
            body: {
                query: {
                    multi_match: {
                        "query":query,
                        "fields": ["title","content"]
                        }
                },
                highlight: {
                    "fields": {
                        "content": {}
                    }
                }
            }
        }, function (error, response, status) {
            if (error) {
                return rej("Error");
            }
            else {
                return res(response.hits.hits);
            }
        });

    })
}