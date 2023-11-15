const express = require('express');
require( './db' )
const indexRouter = require( './router/indexRouter' )
const app = express();

app.use( express.json() )
app.use( "/api", indexRouter )


app.listen( 8080, () => {
    console.log('server running on port 8080')
})
