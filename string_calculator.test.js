const stringCalculator = require('./string_calculator')


test("addition of 4,6 and 7",()=>{
    expect(stringCalculator("4,6,7")).toBe(17)
})

test("Empty string output",()=>{
    expect(stringCalculator("")).toBe(0)
})

test("Single number output",()=>{
    expect(stringCalculator("1")).toBe(1)
})
