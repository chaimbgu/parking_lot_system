let checkIfValidCar = function(text:string)
{
    var regExpIfValidCar = new RegExp(/^[0-9]{7,8}$/)

    if(regExpIfValidCar.test(text))
    {
        return {permission:true,VehicleType:"Normal car"} 
    }
    else{
        return false;
    }
}

export {checkIfValidCar}