const Square = require('./lib/shapes');
const Circle = require('./lib/shapes');
const Triangle = require('./lib/shapes');

describe('Square Test', () => {
    test('Test for Blue Square', () => {
        const shape = new Square('blue');
        expect(shape.render()).toEqual(
            '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /></svg>;'
        );
    });
});