import formatDate from "./formatDate.js"


describe('Testing if function passes dates that are undefined', () => {
    it('Returns console.log("Start Date does not exist")', () => {
//Arrange
let date = undefined
//Act
const result = formatDate(date)
console.log(result)
//Assert
expect(result).toBe(console.log("Date does not exist"))
    })
})


describe('Testing if function fails strings with less than or equal to 23 characters', () => {
    it('Start Date is too small in console', () => {
//Arrange
let date = ' '
//Act
const result = formatDate(date)
console.log(result)
//Assert
expect(result).toBe(console.log("Date is too short"))
    })
})


describe('Testing if function fails when date string does not contain T', () => {
    it('Date does not contain T', () => {
//Arrange
let date = '2022-06-30X00:00:00.000Z'
//Act
const result = formatDate(date)
console.log(result)
//Assert
expect(result).toBe(console.log("Date does not contain a T"))
    })
})

describe('Testing if function fails when date string does not contain 2 dashes in positions 4 and 7', () => {
    it('Date does not contain 2 dashes in positions 4 and 7', () => {
//Arrange
let date = '20220-63-300:00:00.000Z'
//Act
const result = formatDate(date)
console.log(result)
//Assert
expect(result).toBe(console.log("Date does not contain 2 dashes in positions 4 and 7"))
    })
})

describe('Testing if function is successful when date string is in correct format', () => {
    it('formatDate function works successfuly', () => {
//Arrange
let date = '2022-06-30T00:00:00.000Z'
//Act
const result = formatDate(date)
console.log(result)
//Assert
expect(result).toBe('30-06-2022')
    })
})

