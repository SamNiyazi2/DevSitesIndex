
// 11/18/2019 11:07 am - SSN
// https://docs.microsoft.com/en-us/visualstudio/javascript/unit-testing-javascript-with-visual-studio?view=vs-2019

 

var assert = require('assert');

describe('Test Suite 1', function () {
    it('Test 1', function () {
        assert.ok(true, "This shouldn't fail");
    })

    it('Test 2', function () {
        assert.ok(1 === 1, "This shouldn't fail");
        assert.ok(false, "This should fail");
    })
})
 
