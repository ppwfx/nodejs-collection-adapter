import {IErrorHandler} from "../handler/error/IErrorHandler";
import {IEncoder} from "../encoder/IEncoder";
import {StdOutErrorHandler} from "../handler/error/StdOutErrorHandler";
import {JsonEncoder} from "../encoder/JsonEncoder";
import {RedisAdapter} from "./redis/RedisAdapter";

export class AdapterFactory {

    public create(name:string, config:any = {}) {
        var adapter = null;
        switch (name) {
            case 'redis':
                adapter = new RedisAdapter(config);
                break;
            default:
                throw new Error(name + ' is not a supported queue adapter')
        }

        return adapter;
    }
}