import { formatCurrency } from "../scripts/utils/money.js";

describe("Test suite: formatCurrency", () => {
  it("Converts cents into dollars", () => {
    expect(formatCurrency(2005)).toEqual("20.05");
  });
});
//describe(): provided by jasmine and create a test suite
// it(): provided by jasmine and create a test case
// expect(): provided by jasmine and compare the actual value with the expected value
