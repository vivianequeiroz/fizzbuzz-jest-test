const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz Puzzle", () => {
    test("Should return 0 when receive 0", () => {
        const resultReturn = fizzbuzz(0);
        expect(resultReturn).toEqual(0);
    });

    test("Should return FizzBuzz when receive a number multiple of 3 and 5", () => {
        const resultFizzbuzz = fizzbuzz(15);
        expect(resultFizzbuzz).toEqual("FizzBuzz");
    });
   
    test("Should return Buzz when receive a number multiple of 5", () => {
        const resultBuzz= fizzbuzz(10000000000);
        expect(resultBuzz).toEqual("Buzz");
    });
   
    test("Should return Fizz when receive a number multiple of 3", () => {
        const resultFizz= fizzbuzz(93);
        expect(resultFizz).toEqual("Fizz");
    });

});