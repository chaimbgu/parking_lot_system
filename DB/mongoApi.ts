import {DBApi} from './DBInterface'
import {permissionDetails} from '../types';
const Permission = require('./permissionModel')

class MongoImpl implements DBApi{
    saveDataOnDB =function(permissionDetails:permissionDetails){
        let newPermission = new Permission(permissionDetails)
        newPermission.save((err:any)=>{
            if(err)
                console.log("Permission for "+ permissionDetails.PlateText+ " didnt saved on DB")
            else
                console.log("Permission for " + permissionDetails.PlateText+" inserted succussfully to DB")
    })       
    }
}
let DBApi = new MongoImpl()
export {DBApi}
