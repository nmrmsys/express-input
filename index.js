'use strict'

const get = require('lodash.get');
const defaults = require('lodash.defaults');
// const debug = require('debug')('expressInput');

module.exports = expressInput

function expressInput() {
    return function(req, res, next) {
        req.input = function(name, defaultValue) {
            // debug('req.params: %O', req.params);
            // debug('req.body: %O', req.body);
            // debug('req.query: %O', req.query);
            if(typeof name === 'undefined') {
                return defaults(req.body, req.query);
            } else {
                const bodyValue = get(req.body, name);
                if(bodyValue)
                    return bodyValue;
                const queryValue = get(req.query, name);
                if(queryValue)
                    return queryValue;
                return defaultValue;
            }
        };
        next();
    }
}
