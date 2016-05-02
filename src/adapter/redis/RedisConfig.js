"use strict";
var RedisConfig = (function () {
    function RedisConfig() {
        this.host = null;
        this.port = null;
        this.unix_socket = null;
        this.options = {};
    }
    return RedisConfig;
}());
exports.RedisConfig = RedisConfig;
