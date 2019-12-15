const { filenameIsValid, extractDateFromFilename } = require('../src/util/filename');
var assert = require('assert');

describe('Filename utilities', function() {
  describe('#filenameIsValid()', function() {
    it('should pass well formed titles', function() {
      assert.ok(filenameIsValid('2019-01-01-12-12-cool.md'));
      assert.ok(filenameIsValid('1970-12-12-12-12-cool.md'));
      assert.ok(filenameIsValid('1970-12-12-12-12-cool-this-is-a-name-too.md'));
    });
    it('should fail if only the date is present', function() {
      assert.equal(filenameIsValid('2019-01-01-12-12.md'), false);
      assert.equal(filenameIsValid('2019-01-01-12-12-.md'), false);
    });
    it('should fail if there is no extension', function() {
      assert.equal(filenameIsValid('2019-01-01-12-12-'), false);
      assert.equal(filenameIsValid('2019-01-01-12-12-this-is-a-good-name'), false);
    });
    it('should fail if there is just a filename', function() {
      assert.equal(filenameIsValid('lol.md'), false);
      assert.equal(filenameIsValid('this-will-fail.md'), false);
    });
  });

  describe('#extractDateFromFilename()', function() {
    it('should return a date', function() {
      const date = extractDateFromFilename('2019-01-01-12-12-cool.md');
      assert.equal(date.getYear(), 119);
      assert.equal(date.getMonth(), 0);
      assert.equal(date.getDate(), 1);
      assert.equal(date.getHours(), 12);
      assert.equal(date.getMinutes(), 12);
      console.log(date);
    });
  });
});