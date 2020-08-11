export interface OCRApi {
    extractTextFromImage : (imagePath:string)=>Promise<string>
}