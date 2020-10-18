function add(x, y) {
    return x + y;
}

describe('First test', () => {
    it('Sum numbers', () => {
        // arrange
        let x = 4;
        let y = 1;
        // act
        const result = add(x, y);
        // assert
        expect(result).toBe(5);
    })
});

describe('Login View test', () => {
    it('Check if any log in info', () => {
        const utils = require("../../src/views/Login.vue");
        var info = true;

        expect(utils).toBe(info);
    })
});