const stringCalculator = require('./string_calculator')


test("addition of 4,6 and 7",()=>{
    expect(stringCalculator("4,6,7")).toBe(17)
})
