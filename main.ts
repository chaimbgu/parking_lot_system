
const ocrSpaceApi = require('./OCR/OCRConfig');
const db_connection =require('./DB/mongoConfig')
require('log-timestamp')
const assert = require('assert');
const Person = require('./DB/permissionModel')
const ParkingPermissionService = require('./ParkingPermissionService.ts')
import {extractTextAndCheckPermission} from './ParkingPermissionService'
import {checkIfLawVehicle} from './PermissionsConditions/permissionForLawVehicle'
import {checkIfPublicTransparation} from './PermissionsConditions/permissionForPublicTransparation'
import {checkIfGasVehicle} from './PermissionsConditions/permissionForGasVehicle'
import {checkIfSevenDigitsNumberWithSpecificEnd} from './PermissionsConditions/permissionForSpeciel7DigitsVehicle'
import {checkIfValidCar} from './PermissionsConditions/permissionForNormalCar'



let mainFunc = async function(imageInfo:string,isPath:boolean){
    let res = await extractTextAndCheckPermission(imageInfo,isPath,[checkIfLawVehicle,checkIfGasVehicle,checkIfPublicTransparation,checkIfSevenDigitsNumberWithSpecificEnd],checkIfValidCar)
    return res
} 
export {mainFunc}
let NUM_OF_EXPECTED_ARGS    = 2
let IMAGE_DATA_INDEX        = 0
let IS_PATH_INDEX           = 1
let args = process.argv.splice(2)
if(args.length==NUM_OF_EXPECTED_ARGS){
    let imageInfo = args[IMAGE_DATA_INDEX]
    let isPath = args[IS_PATH_INDEX]==="true"
    mainFunc(imageInfo,isPath)
}


           











