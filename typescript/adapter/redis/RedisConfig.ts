import redis = require('redis');

export class RedisConfig {
    public host:string = null;
    public port:number = null;
    public unix_socket:string = null;
    public options:redis.ClientOpts = {};
}