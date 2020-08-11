let checkIfPublicTransparation = function(text:string)
{
    var regExpIfPublicTransparation = new RegExp(/^[0-9]{3,7}[2]{1}[6,5]{1}$/)
    if(regExpIfPublicTransparation.test(text))
        return {permission:false,VehicleType:"Public Transparation"};
    else
        return false;
}

export {checkIfPublicTransparation}