import {DBApi} from './DB/DBInterface'
import {OCRApi} from './OCR/OCRInterface'
import {permissionDetails,permissionType,permissionCallback} from './types';
import * as DBApiImpl from './DB/mongoApi'
import * as OCRApiImpl from './OCR/OCRConfig'

let DBApi :DBApi=DBApiImpl.DBApi
let OCRApi :OCRApi=OCRApiImpl.OCRApi
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let addEventToDB= function(eventDetails: permissionType,text:string)
{
    let validPlate:boolean = false;
    let plateText = text;
    let getPermission = false;
    let vehicleType  = "UNKNOWN"
    let date = new Date()
    let dayName = days[date.getDay()];
    if(typeof(eventDetails) != 'boolean'){
        validPlate= true
        getPermission = eventDetails.permission
        vehicleType = eventDetails.VehicleType
    }
    let newPermission:permissionDetails = 
        {
            validPlate:     validPlate,
            PlateText :     plateText,
            getPermission : getPermission,
            date :          date,
            day :           dayName,
            vehicleType :   vehicleType
        }
    if(validPlate)
        console.log("plate number ",plateText," is valid plate number type of the vehicle is ",vehicleType) 
    else
        console.log("Plate number "+plateText+" isnt valid plate number")
    if(getPermission) 
        console.log("The vehicle ask permission in "+date+" permission approve") 
    else
        console.log("The vehicle ask permission in "+date+" permission denied") 
    DBApi.saveDataOnDB(newPermission)
    return newPermission
}

let checkPermission = function(text:string,specialVehiclesChecks:permissionCallback[],normalCarChecks:permissionCallback)
{   
     console.log("Checking plate "+text+" permission and type")
     let result :permissionType = false
     specialVehiclesChecks.some((elem)=>{
        let curr_res = elem(text)
        if(curr_res!= false && !result)
            result = curr_res
        return curr_res
    })
    if(result==false){
        result = normalCarChecks(text)
    }
     return addEventToDB(result,text)
}
let extractTextAndCheckPermission =async function(imagePath:string,isPath:boolean,specialVehiclesChecks:permissionCallback[],normalCarChecks:permissionCallback)
{
    let imageText = imagePath
    if(isPath)
        imageText = await OCRApi.extractTextFromImage(imagePath)   
    return checkPermission(imageText,specialVehiclesChecks,normalCarChecks)
}
    
    export {extractTextAndCheckPermission}