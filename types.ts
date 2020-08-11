export type permissionDetails ={
            validPlate:         boolean,
            PlateText :         string,
            getPermission :     boolean,
            date :              Date,
            day :               string,
            vehicleType :       string
        };
export type test_model = {image_path:string,expectedPermission:{validPlate:boolean,PlateText:string,getPermission:boolean,vehicleType:string}};
export type permissionType = {permission:boolean,VehicleType:string}|boolean
export type permissionCallback = (text:string)=> permissionType;
