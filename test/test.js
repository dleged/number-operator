const assert = require('assert');
require('../index.js');

describe('math', function () {
    describe('#_pluss_', function () {
        it('should return 0.3 when the value is not present', function () {
            assert.equal((0.1)._plus_(0.2), 0.3);
        });
    });
});

describe('math', function () {
    describe('#_minus_', function () {
        it('should return 0.2 when the value is not present', function () {
            assert.equal((0.3)._minus_(0.1), 0.2);
        });
    });
});

describe('math', function () {
    describe('#_times_', function () {
        it('should return 0.02 when the value is not present', function () {
            assert.equal((0.1)._times_(0.2), 0.02);
        });
    });
});

describe('math', function () {
    describe('#_div_', function () {
        it('should return 1.5 when the value is not present', function () {
            assert.equal((0.3)._div_(0.2), 1.5);
        });
    });
});


