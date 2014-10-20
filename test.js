var assert = require('assert')
var co = require('./index')


describe('select', function () {
    it('should select result', function (done) {
        (function (callback) {
            callback(undefined, [41, 42, 43])
        })(co.select(1, function (err, res) {
            assert.equal(res, 42);
            done()
        }))
    })
})
