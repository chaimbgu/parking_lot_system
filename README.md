# Parking lot system

## INSTRUCTIONS

### Installing the packages:
```bash
npm install
```
```bash
npm install -g ts-node-dev
```
### Run the program:

The program supports 2 modes:

#### Default mode
1st argument = The program can get path of image or plate number string

2nd argument = If 1st argument is image path "true" else "false
```bash
npm start -- "first argument" "second argument"
```
#### Test mode

The program will run automatically examples of images and plate numbers
```bash
npm test
```


## Project hierarchy

**./DB/DBInterface.ts** - The service can use every class that implement this interface for using database.

**./DB/mongoApi.ts** - Implementation of DBInterface that using mongodb.

**./DB/mongoconfig.ts** - connect to mongodb database.

**./DB/PermissionModel.ts** - Scheme of the data in the Mongo.

**./OCR/OCRInterface.ts** -The service can use every class that implement this interface for using ocr.

**./OCR/OCRConfig.ts** -Implementation of OCRInterface that using OCRSPACE.

**./PermissionsConditions** The folder include file for every car vehicle type and it make the program more generics.

every condition is function of type 
(string)=>{permission:boolean,VehicleType:string}|boolean

**./TESTS/testsExpectedResults.ts** -Json that include all the information about the  tests.

**./TESTS/test.ts** - this file execute the tests from the json above.

**./parkingPermissionService.ts** - The service class.
The public function of this service is extractTextAndCheckPermission
the parameter of this method:

imagePath - string that represent the path of the image or the plate text string.

isPath - determine if first argument is path or plate number

specialVehiclesChecks - list of callbacks of all the special vehicles.

normalCarChecks - callback that check if this plate number is 7 or 8 numbers plate in case the vehicle is not special car.


**./main.ts** - Get arguments from shell and use the service.

**./types.ts** - include all the new types that defined in the program.




