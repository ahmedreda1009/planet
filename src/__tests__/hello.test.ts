const say = require('../ts/hello');

test("hello", () => {
    expect(say()).toBe('hi');
});