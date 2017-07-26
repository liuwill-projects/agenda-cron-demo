var utils = require("utility")

describe('utils', function () {
  describe('.md5()', function () {
    it('should encode md5 strings', function () {
      //测试的代码在此
      console.log(utils.md5({ name: "liuwill" }));
    });
  });
});
