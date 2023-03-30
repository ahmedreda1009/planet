const userSize = require('../ts/components/usernameSize');

it('handle long names', () => {
    expect(userSize('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdaaaaaaaa')).toBe('aaaaaaaaaaaaaaa...');
});

it('handle short names', () => {
    expect(userSize('Ahmed Reda')).toBe('Ahmed Reda');
});