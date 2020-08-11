var dataForTestsJson={
    test_expected_results_with_path:[{image_path:"./Pictures/test1.jpg",expectedPermission:{validPlate:true,PlateText:"CB29209",getPermission:false,vehicleType:"Law Vehicle"}}
         ,{image_path:"./Pictures/test2.jpg",expectedPermission:{validPlate:true,PlateText:"4108387",getPermission:false,vehicleType:"7 digits with specific end vehicle"}}
     ,{image_path:"./Pictures/test3.jpg",expectedPermission:{validPlate:true,PlateText:"2640520",getPermission:true,vehicleType:"Normal car"}},
    {image_path:"./Pictures/test4.jpg",expectedPermission:{validPlate:true,PlateText:"1204590",getPermission:false,vehicleType:"Gas Vehicle"}},
        {image_path:"./Pictures/test5.jpg",expectedPermission:{validPlate:true,PlateText:"12345678",getPermission:true,vehicleType:"Normal car"}},
        {image_path:"./Pictures/test6.jpg",expectedPermission:{validPlate:false,PlateText:"68Å61T36bwuu•",getPermission:false,vehicleType:"UNKNOWN"}}]

,test_expected_results_without_path:[{image_path:"2546454",expectedPermission:{validPlate:true,PlateText:"2546454",getPermission:true,vehicleType:"Normal car"}},
{image_path:"2526425",expectedPermission:{validPlate:true,PlateText:"2526425",getPermission:false,vehicleType:"Public Transparation"}},
{image_path:"123456789",expectedPermission:{validPlate:false,PlateText:"123456789",getPermission:false,vehicleType:"UNKNOWN"}},
{image_path:"1542%25",expectedPermission:{validPlate:false,PlateText:"1542%25",getPermission:false,vehicleType:"UNKNOWN"}},
{image_path:"abcd",expectedPermission:{validPlate:true,PlateText:"abcd",getPermission:false,vehicleType:"Law Vehicle"}}]
}
export default dataForTestsJson
