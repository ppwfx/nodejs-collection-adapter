"use strict";
var StdOutErrorHandler_1 = require("../handler/error/StdOutErrorHandler");
var JsonEncoder_1 = require("../encoder/JsonEncoder");
var RedisAdapter_1 = require("./redis/RedisAdapter");
var AdapterFactory = (function () {
    function AdapterFactory() {
    }
    AdapterFactory.prototype.create = function (name, config, errorhandler, encoder) {
        if (errorhandler === void 0) { errorhandler = new StdOutErrorHandler_1.StdOutErrorHandler(); }
        if (encoder === void 0) { encoder = JsonEncoder_1.JsonEncoder; }
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
