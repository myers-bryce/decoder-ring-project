// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should return false if the shift value isn't present", () => {
    const input = "hello";
    const actual = caesar(input, );
    expect(actual).to.be.false;
  });
  it("should return false if the shift value is less than -25", () => {
    const input = "hello"
    const actual = caesar(input, -27)
    expect(actual).to.be.false
  });
  it("should return false if the shift value is great than 25", () => {
    const input = "hello"
    const actual = caesar(input, 27)
    expect(actual).to.be.false
  })
  it("should return false if the shift value is 0", () => {
    const input = "hello"
    const actual = caesar(input, 0)
    expect(actual).to.be.false
  })
  it("should maintain spaces as well as nonalphabetic symbols", () => {
    const input = "zanadu vi$it"
    const actual = caesar(input, 8)
    expect(actual).to.equal("hivilc dq$qb")
  })
  it("should ignore capital letters", () => {
    const input = "HELLO"
    const actual = caesar(input, 5)
    expect(actual).to.equal("mjqqt")
  })
  it("should shift letter 'around' the alphabet, wrapping around to the other side as needed", () => {
    const input = "zebra tan"
    const actual = caesar(input, 3)
    expect(actual).to.equal("cheud wdq")
  })
});
