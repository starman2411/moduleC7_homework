import {sum, multiply, abs, power} from "../math-tools.js";

describe("test sum function", () => {
    it("2 add 0 to equal 2", () => {
        const result = sum(2, 0);
        expect(result).toBe(2);
    })
    it("15 add -3 to equal 12", () => {
        const result = sum(15, -3);
        expect(result).toBe(12);
    })
});

describe("test multiply function", () => {
    it("multiply 2 * 0 to equal 0", () => {
        const result = multiply(2, 0);
        expect(result).toBe(0);
    })
    it("multiply 2 * 1 to equal 2", () => {
        const result = multiply(2, 1);
        expect(result).toBe(2);
    })
});

describe("test abs function", () => {
    it("abs -13 to equal 13", () => {
        const result = abs(-13);
        expect(result).toBe(13);
    })
    it("abs 33 to equal 33", () => {
        const result = abs(33);
        expect(result).toBe(33);
    })
    it("abs 0 to equal 0", () => {
        const result = abs(0);
        expect(result).toBe(0);
    })
});

describe("test power function", () => {
    it("2 doubled to equal 4", () => {
        const result = power(2, 2);
        expect(result).toBe(4);
    })
    it("3 in power of 4 to equal 81", () => {
        const result = power(3, 4);
        expect(result).toBe(81);
    })
});