const express = require('express');
const app = express();
const path = require('path');
var exphbs  = require('express-handlebars');
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({}));// {} if no use layout.
app.set('view engine', 'handlebars');
const search = require('./search');
app.get('/', async function (req, res) {
    const query = req.query.q;
    if(!query) return res.send('No query');
    await search(query).then(r=>{
        res.render('index',{
            layout:false, 
            query,
            r
        });
    }).catch(e=>{
        res.send(e);
    })
});
app.get('/api', async function (req, res) {
    const query = req.query.q;
    if(!query) return res.send('No query');
    await search(query).then(r=>{
        res.json(r);
    }).catch(e=>{
        res.send(e);
    })
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



