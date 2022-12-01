import hello from '../src';

describe('Example test.', () => {
    test('Test for the hello function.', () => {
        const res = hello('World');

        expect(res).toBe('Hello World!');
    });
});
