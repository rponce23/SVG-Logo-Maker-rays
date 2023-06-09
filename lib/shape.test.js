const Square = require('../lib/shapes');


// A testing suite for Square test is created
describe('Square Test', () => {
    test('Test for Blue Square', () => {
        const shapeS = new Square('blue');
        expect(shapeS.render()).toEqual(
            '<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"73\" y=\"40\" width=\"160\" height=\"160\" fill=\"blue\" /></svg>;'
        );
    });
});
