const stringCalculator = require('./string_calculator')


test("Test Multiple Numbers",()=>{
    expect(stringCalculator("4,6,7")).toBe(17)
})

test("Test Empty String",()=>{
    expect(stringCalculator("")).toBe(0)
})

test("Test One Number",()=>{
    expect(stringCalculator("1")).toBe(1)
})

test("Test New Line",()=>{
    expect(stringCalculator("1\n2,3\n4")).toBe(10)
})

test("Test Negative Number",()=>{
    expect(stringCalculator("-4,6,7")).toBe("Negative numbers not allowed:-4")
})

test("Test Other Delimiter",()=>{
    expect(stringCalculator("//;\n1;2")).toBe(3)
})
