let mongoose = require('mongoose')

let Schema = mongoose.Schema

let PermissionSchema = new Schema({
    validPlate :    Boolean,
    PlateText :     String,
    getPermission:  Boolean,
    date:           Date ,
    day :           String,
    vehicleType :   String ,

});

module.exports = mongoose.model('PermissionsCollection',PermissionSchema)