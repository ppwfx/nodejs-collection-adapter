import Promise = require('bluebird');

export interface ICollectionAdapter {
    set(collection:string, key:string, value:any):Promise;
    get(collection:string, key:any):Promise;
}