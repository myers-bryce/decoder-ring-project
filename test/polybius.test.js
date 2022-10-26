// Write your tests here!
const { expect } = require("chai")
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should output a string when encoding", () => {
        const input = ("space unicorn")
        const actual = polybius(input)
        expect(actual).to.be.a('string')
    })
    it("input should have an even number of characters, minus spaces, when decoding - otherwise return false", () => {
        const input = ("3453113151 543342314324331")
        const actual = polybius(input, false)
        expect(actual).to.be.false
    })
    it("should maintain spaces throughout", () => {
        const input = ("space unicorn")
        const actual = polybius(input)
        expect(actual).to.equal('3453113151 54334231432433')
    })
    it("should maintain spaces througout (decode edition)", () => {
        const input = ("3453113151 54334231432433")
        const actual = polybius(input, false)
        expect(actual).to.equal('space un(i/j)corn')
    })
    it("should be able to ignore capital letters", () => {
        const input = ("Space Unicorn")
        const actual = polybius(input)
        expect(actual).to.equal('3453113151 54334231432433')
    })
    it("should output i and j together ", () => {
        const input = ("3453113151 54334231432433")
        const actual = polybius(input, false)
        expect(actual).to.equal('space un(i/j)corn')
    })
})