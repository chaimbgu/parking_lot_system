const ocrSpaceApi = require('ocr-space-api');
import {OCRApi} from './OCRInterface'
const configVar = require('../config.js')
const apiKey = configVar.ocrKey
var options =  { 
    apikey: apiKey,
    language: 'eng',
    filetype : 'jpg',
    scale: true,
    isOverlayRequired: true,
    isTable : true,
    OCREngine : 2

  };
class OCRSpaceImpl implements OCRApi{
    extractTextFromImage = async function(imagePath:string){ 
        let plateText= await ocrSpaceApi.parseImageFromLocalFile(imagePath, options)
        plateText = plateText.parsedText
        plateText = plateText.replace(new RegExp('\r\n', 'g'), '')
        plateText = plateText.replace(new RegExp(' ', 'g'), '');
        plateText = plateText.replace(new RegExp('-', 'g'), '')
        return plateText  
    }
}
let OCRApi = new OCRSpaceImpl()
export {OCRApi}

