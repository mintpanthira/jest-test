const divideByTwo = require('./app')

describe("Divide by Two", () =>{
    it('cannot divide by 2', function() {
        var a = divideByTwo(5);
        expect(a).toBe('false');
    });
      
      it('can divide by 2', function() {
          var a = divideByTwo(4);
          expect(a).toBe('true');
    });
        
})

describe("Divide by Two", () =>{
    it('5 cannot divide by 2', function() {
        var a = divideByTwo(5);
        expect(a).toBe('false');
    });
      
      it('4 can divide by 2', function() {
          var a = divideByTwo(4);
          expect(a).toBe('true');
    });


    it('9 cannot divide by 2', function() {
        var a = divideByTwo(9);
        expect(a).toBe('false');
    });


    it('10 can divide by 2', function() {
        var a = divideByTwo(10);
        expect(a).toBe('true');
  });
})

describe("Divide by Two", () =>{
    it.each`
    name                      |value       |expectedResult
    ${'5 Cannot divide by 2'} |${5}        |${'false'}
    ${'4 Can divide by 2'}    |${4}        |${'true'}
    ${'9 Cannot divide by 2'} |${9}        |${'false'}
    ${'10 Can divide by 2'}   |${10}       |${'true'}
    `("Test: $name", ({ value, expectedResult }) => {
        var a = divideByTwo(value);
        expect(a).toBe(expectedResult);
      })
})