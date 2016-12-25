/**
 * Created by zhaojm on 23/09/2016.
 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./index.prod');
} else {
    module.exports = require('./index.dev');
}