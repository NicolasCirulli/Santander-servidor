const  mongoose = require('mongoose')

mongoose.connect("")
    .then( () => console.log('data base connected')).catch( err => console.log(err) )