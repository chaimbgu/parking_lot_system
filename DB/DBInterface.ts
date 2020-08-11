import {permissionDetails} from '../types';
export interface DBApi {
    saveDataOnDB : (permissionDetails:permissionDetails)=>void
}