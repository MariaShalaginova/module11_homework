import {getPercents } from "../../utils/getPercents"
describe("return percent of number", () => {

    it("percent 5 of 200, 10 of 300, 5 of 500", () => {
        expect(getPercents(5, 200)).toBe(10);
        expect(getPercents(10, 300)).toBe(30);
        expect(getPercents(5, 500)).toBe(25);
    });
});

describe("is valid argument", () => {

    it("percent and number are numbers", () => {
        expect(getPercents("h", 200)).toBe("arguments are not a number");
    });
});

describe("devision by zero", () => {

    it("percent is not a zero", () => {
        expect(getPercents(0, 100)).toBe("percent can not equal 0");
    });
});
