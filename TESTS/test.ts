import {mainFunc} from '../main'
import  dataForTestsJson from './testsExpectedResults'
import {test_model} from '../types';

const assert = require('assert');
const Permission = require('../DB/permissionModel')
let dataForTestsWithPath:test_model[] = dataForTestsJson.test_expected_results_with_path
let dataForTestsWithoutPath:test_model[] = dataForTestsJson.test_expected_results_without_path
let numberOfTests = dataForTestsWithPath.length + dataForTestsWithoutPath.length
let passedTestsCounter = 0;
let execute_test = async function(curr_test:test_model,isPath:boolean){
    let result = await mainFunc(curr_test.image_path,isPath)
    let expectedPermission = 
        {  
            validPlate:result.validPlate,
            PlateText : result.PlateText,
            getPermission : result.getPermission,
            vehicleType : result.vehicleType
        }
    try {
        assert.deepEqual(expectedPermission,curr_test.expectedPermission)
        console.log("Test of  "+curr_test.image_path+" PASSED!")
        passedTestsCounter++;
        if(passedTestsCounter==numberOfTests)
            console.log("ALL TESTS PASSED!")
    }catch (error) {
        console.log("Test of  "+curr_test.image_path+" FAILED!")
    }
}

let test =  async function(){
    
    for(let elem of dataForTestsWithPath){
        await execute_test(elem,true)
    }
}
let testFromText =  async function(){
    
    for(let elem of dataForTestsWithoutPath){
        await execute_test(elem,false)
    }
    
}

test()
testFromText()


