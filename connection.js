var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  apiVersion: '7.4', // use the same version of your Elasticsearch instance
});
module.exports = client;  