let checkIfSevenDigitsNumberWithSpecificEnd = function(text:string)
{
    var sevenDigitsNumberWithSpecificEnd = new RegExp(/^[0-9]{5}(([0]{2})|(8[5-9]{1}))$/)
    if(sevenDigitsNumberWithSpecificEnd.test(text))
        return {permission:false,VehicleType:"7 digits with specific end vehicle"};
    else
        return false;
}

export {checkIfSevenDigitsNumberWithSpecificEnd}