// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should maintain spaces", () =>{
        const input = "space test"
        const alphabet = "biloepw97acsvnq5*mxk06zr81"
        const actual = substitution(input, alphabet)
        expect(actual).to.equal("x5ble kexk")
    })
    
    it("can ignore capital letters", () => {
        const input = "Space Test"
        const alphabet = "biloepw97acsvnq5*mxk06zr81"
        const actual = substitution(input, alphabet)
        expect(actual).to.equal("x5ble kexk")
    })
    
    it("should pass false if the alphabet parameter is not 26 characters, including special characters", () => {
        const input = "Space Test"
        const alphabet = "biloepw97acsvnq5*mxk06zr81%"
        const actual = substitution(input, alphabet)
        expect(actual).to.be.false
    })
    it("should have all the characters in the alphabet parameter be unique, otherwise return false", () => {
        const input = "Space Test"
        const alphabet = "biloepw97acsvnq5*mxk06zr11"
        const actual = substitution(input, alphabet)
        expect(actual).to.be.false
    })
    it("should be able to decode an input that includes spaces and special characters", () => {
        const input = "x5$le kexk"
        const alphabet = "$iloepw97acsvnq5*mxk06zr81"
        const actual = substitution(input, alphabet, false)
        expect(actual).to.equal("space test")
    })
  });