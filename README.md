# nodejs-collection-adapter

[![Build Status](https://travis-ci.org/21stio/nodejs-collection-adapter.svg?branch=master)](https://travis-ci.org/21stio/nodejs-collection-adapter)
[![Test Coverage](https://codeclimate.com/github/21stio/nodejs-collection-adapter/badges/coverage.svg)](https://codeclimate.com/github/21stio/nodejs-collection-adapter/coverage)

Provides a simple interface to collection based data stores

### Installation

```sh
npm install collection-adapter
```

### Supported Services

*	Redis powered by [redis](https://www.npmjs.com/package/redis)

### Usage

Basic Javascript

```javascript
var adapter = require('collection-adapter').create('redis');

adapter.set("my-collection", "my-key", "my-value").then(function (reply) {
    console.log("Successfully set key");
});

adapter.get("my-collection", "my-key").then(function (value) {
    console.log(value);
});
```

Advanced Typescript

```javascript
var adapterFactory = require('collection-adapter');

var redisConfig = new RedisConfig();
redisConfig.port = process.env.REDIS_PORT;
redisConfig.host = process.env.REDIS_HOST;

var adapter = adapterFactory.create('redis', redisConfig);

adapter.set("my-collection", "my-key", "my-value").then(function (reply) {
    console.log("Successfully set key");
});

adapter.get("my-collection", "my-key").then(function (value) {
    console.log(value);
});
```

