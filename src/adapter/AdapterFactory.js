"use strict";
var RedisAdapter_1 = require("./redis/RedisAdapter");
var AdapterFactory = (function () {
    function AdapterFactory() {
    }
    AdapterFactory.prototype.create = function (name, config) {
        if (config === void 0) { config = {}; }
        var adapter = null;
        switch (name) {
            case 'redis':
                adapter = new RedisAdapter_1.RedisAdapter(config);
                break;
            default:
                throw new Error(name + ' is not a supported queue adapter');
        }
        return adapter;
    };
    return AdapterFactory;
}());
exports.AdapterFactory = AdapterFactory;
