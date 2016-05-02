"use strict";
var Chai = require('chai');
var RedisConfig_1 = require("../../adapter/redis/RedisConfig");
var AdapterFactory_1 = require("../../adapter/AdapterFactory");
var adapterFactory = new AdapterFactory_1.AdapterFactory();
var redisConfig = new RedisConfig_1.RedisConfig();
redisConfig.port = process.env.REDIS_PORT;
redisConfig.host = process.env.REDIS_HOST;
var adapters = {
    RedisAdapter: adapterFactory.create('redis', redisConfig)
};
Object.keys(adapters).forEach(function (key) {
    describe('Run generic integration test on: ' + key, function () {
        var adapter = adapters[key];
        describe('#set() and get()', function () {
            it('set a value for a key and retrieves the key', function (done) {
                var collection = 'testing';
                var key = (new Date).toString();
                var value = "1212";
                adapter.set(collection, key, value).then(function (reply) {
                    console.log("set() returned: ", reply);
                    adapter.get(collection, key).then(function (receivedValue) {
                        console.log("get() returned: ", receivedValue);
                        Chai.assert.equal(receivedValue, value);
                        done();
                    });
                });
            });
        });
        describe('#get() a key that does not exist', function () {
            it('try to get a key that does not exist', function (done) {
                var collection = 'testing';
                var key = 'does_not_exist_' + (new Date).toString();
                adapter.get(collection, key).then(function (receivedValue) {
                    console.log("get() returned: ", receivedValue);
                    Chai.assert.equal(receivedValue, null);
                    done();
                });
            });
        });
    });
});
