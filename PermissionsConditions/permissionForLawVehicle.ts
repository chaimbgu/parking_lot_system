
let checkIfLawVehicle = function(text:string)
{
    var regExpIfContainLetter = new RegExp(/^([0-9]*[a-zA-Z]+[0-9]*){0,9}$/)
    if(regExpIfContainLetter.test(text))
        return {permission:false,VehicleType:"Law Vehicle"};
    else
        return false;
}

export {checkIfLawVehicle}