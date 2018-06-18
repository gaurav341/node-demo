var path = require('path')

var config = {
    mongo: {
        localHost: 'mongodb://localhost:27017/nodetest',
        options: {
            server: {
                auto_reconnect: true,
                poolSize: 10,
                socketOptions: {
                    keepAlive: 1
                }
            },
            db: {
                numberOfRetries: 10,
                retryMiliSeconds: 1000
            }
        }
    }
}

module.exports = config;