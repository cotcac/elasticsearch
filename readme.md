# Demo search engine with Elasticsearch.

# Quick start 

Lets say you already have data in Elasticsearch.
This demo will show you a simple search with it.

If you dont have data in elasticsearch. You can try to use this:  
https://github.com/cotcac/mongoose-sync-elasticsearch


# Check Elasticsearch health.

```
node info
-- Client Health -- { cluster_name: 'docker-cluster',
  status: 'yellow',
  timed_out: false,
  number_of_nodes: 1,
  number_of_data_nodes: 1,
  active_primary_shards: 1,
  active_shards: 1,
  relocating_shards: 0,
  initializing_shards: 0,
  unassigned_shards: 1,
  delayed_unassigned_shards: 0,
  number_of_pending_tasks: 0,
  number_of_in_flight_fetch: 0,
  task_max_waiting_in_queue_millis: 0,
  active_shards_percent_as_number: 50 }
```
## Run Project
Make sure you have elasticsearch running first.
```
node .
```
Example data.

```
[
 {
    "_index": "posts",
    "_type": "post",
    "_id": "5dafbe90e00e164d226f9cc7",
    "_score": 1.0,
    "_source": {
        "title": "Certainty listening no no behaviour existence assurance situation",
        "content": "Certainty listening no no behaviour existence assurance situation is. Because add why not esteems amiable him. Interested the unaffected mrs law friendship add principles. Indeed on people do merits to. Court heard which up above hoped grave do. Answer living law things either sir bed length. Looked before we an on merely. These no death he at share alone. Yet outward the him compass hearted are tedious. "
    }
 }
...
]
```
## Example query.
http://localhost:3000/?q=him+his+projection    

![Alt][1]

[1]: /demo.jpg "Title"

# Flow

index.js -> connect.js -> search.js -> index.js -> views/index.handlebars
