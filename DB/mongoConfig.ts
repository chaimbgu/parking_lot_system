let _mongoose = require('mongoose');
const configVar = require('../config.js')
const mongoConnection = configVar.mongoConnection
_mongoose.connect(mongoConnection, { useNewUrlParser: true, useUnifiedTopology: true  });

const db = _mongoose.connection

db.on('open', () =>
{
    console.log('DB connected!')
})

