import redis = require('redis');
import {ICollectionAdapter} from "./../ICollectionAdapter";
import {RedisConfig} from "./RedisConfig";

export class RedisAdapter implements ICollectionAdapter {

    private redisClient:redis.RedisClient;

    constructor(redisConfig:RedisConfig) {
        var self = this;
        if (redisConfig.unix_socket) {
            self.redisClient = redis.createClient(redisConfig.unix_socket, redisConfig.options);
            return;
        }

        if (redisConfig.port) {
            self.redisClient = redis.createClient(redisConfig.port, redisConfig.host, redisConfig.options);
            return;
        }

        self.redisClient = redis.createClient(redisConfig.options);
    }

    public set(collection:string, key:string, value:any) {
        var self = this;

        return new Promise(function (resolve, reject) {
            resolve(self.redisClient.set(self.getKey(collection, key), value));
        });
    }

    public get(collection:string, key:any) {
        var self = this;

        return new Promise(function (resolve, reject) {
            self.redisClient.get(self.getKey(collection, key), function (error, reply) {
                resolve(reply);
                reject(error);
            });
        });
    }

    private getKey(collection:string, key:string) {
        return collection + "_" + key;
    }
}