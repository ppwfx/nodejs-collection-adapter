"use strict";
var redis = require('redis');
var RedisAdapter = (function () {
    function RedisAdapter(redisConfig) {
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
    RedisAdapter.prototype.set = function (collection, key, value) {
        var self = this;
        return new Promise(function (resolve, reject) {
            resolve(self.redisClient.set(self.getKey(collection, key), value));
        });
    };
    RedisAdapter.prototype.get = function (collection, key) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.redisClient.get(self.getKey(collection, key), function (error, reply) {
                resolve(reply);
                reject(error);
            });
        });
    };
    RedisAdapter.prototype.getKey = function (collection, key) {
        return collection + "_" + key;
    };
    return RedisAdapter;
}());
exports.RedisAdapter = RedisAdapter;
