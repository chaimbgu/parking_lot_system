let checkIfGasVehicle = function(text:string)
{
    var regExpIfGasVehicle = new RegExp(/^[0-9]{7,8}$/)
    if(regExpIfGasVehicle.test(text))
    {
        let sum = text.split('').reduce((acc,elem)=>{return acc +Number(elem)},0)
        if(sum % 7 == 0)
             return {permission:false,VehicleType:"Gas Vehicle"} 
        else
             return false;
    }
    else
        return false;
}

export {checkIfGasVehicle}