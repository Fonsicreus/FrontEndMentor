import { expect, test, describe } from "vitest";
import { calculateTip } from "./tip.js";

describe("calculateTip", () => {
  test("correctly calculates tip and total per person", () => {
    const result = calculateTip(100, 2, 15);
    expect(result.tipPerPerson).toBeCloseTo(7.5);
    expect(result.totalPerPerson).toBeCloseTo(57.5);
  });

  test("Works with 0% tip", () => {
    const result = calculateTip(100, 4, 0);
    expect(result.tipPerPerson).toBeCloseTo(0);
    expect(result.totalPerPerson).toBeCloseTo(25);
  });

  test("Works with a single person", () => {
    const result = calculateTip(50, 1, 20);
    expect(result.tipPerPerson).toBeCloseTo(10);
    expect(result.totalPerPerson).toBeCloseTo(60);
  });

  test("Returns null if bill is 0", () => {
    const result = calculateTip(0, 2, 15);
    expect(result).toBeNull();
  });

  test("Returns null if number of people is 0", () => {
    const result = calculateTip(100, 0, 15);
    expect(result).toBeNull();
  });

  test("Returns null if both bill and people are 0", () => {
    const result = calculateTip(0, 0, 15);
    expect(result).toBeNull();
  });

  test("Returns null if bill is negative", () => {
    const result = calculateTip(-50, 2, 15);
    expect(result).toBeNull();
  });

  test("Returns null if people is negative", () => {
    const result = calculateTip(100, -1, 15);
    expect(result).toBeNull();
  });

  test("Handles decimal tip percentage (e.g. 12.5%)", () => {
    const result = calculateTip(200, 4, 12.5);
    expect(result.tipPerPerson).toBeCloseTo(6.25);
    expect(result.totalPerPerson).toBeCloseTo(56.25);
  });
});
