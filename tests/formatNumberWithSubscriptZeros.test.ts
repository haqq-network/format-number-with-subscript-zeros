import { formatNumberWithSubscriptZeros } from '../src/formatNumberWithSubscriptZeros';

describe('formatNumberWithSubscriptZeros', () => {
    const tests = [
        {input: "0.42", expected: "0.42"},
        {input: "0.042", expected: "0.042"},
        {input: "0.0042", expected: "0.0042"},
        {input: "0.00042", expected: "0.00042"},
        {input: "0.000042", expected: "0.000042"},
        {input: "0.0000042", expected: "0.0₅42"},
        {input: "0.00000042", expected: "0.0₆42"},
        {input: "0.000000042", expected: "0.0₇42"},
        {input: "0.0000000042", expected: "0.0₈42"},
        {input: "0.00000000042", expected: "0.0₉42"},
        {input: "0.000000000042", expected: "0.0₁₀42"},
        {input: "0.0000000000042", expected: "0.0₁₁42"},
        {input: "0.00000000000042", expected: "0.0₁₂42"},
        {input: "0.000000000000042", expected: "0.0₁₃42"},
        {input: "0.0000000000000042", expected: "0.0₁₄42"},
        {input: "0.00000000000000042", expected: "0.0₁₅42"},
        {input: "0.000000000000000042", expected: "0.0₁₆42"},
        {input: "0.0000000000000000042", expected: "0.0₁₇42"},
        {input: "0.00000000000000000042", expected: "0.0₁₈42"},
        {input: "0.000000000000000000042", expected: "0.0₁₉42"},
        {input: "0.0000000000000000000042", expected: "0.0₂₀42"},
        {input: "0.00000000000000000000042", expected: "0.0₂₁42"},
        {input: "0.000000000000000000000042", expected: "0.0₂₂42"},
        {input: "0.0000000000000000000000042", expected: "0.0₂₃42"},
        {input: "0.00000000000000000000000042", expected: "0.0₂₄42"},
        {input: "0.000000000000000000000000042", expected: "0.0₂₅42"},
        {input: "0.0000000000000000000000000042", expected: "0.0₂₆42"},
        {input: "0.00000000000000000000000000042", expected: "0.0₂₇42"},
        {input: "0.000000000000000000000000000042", expected: "0.0₂₈42"},
        {input: "0.0000000000000000000000000000042", expected: "0.0₂₉42"},
        {input: "0.00000000000000000000000000000042", expected: "0.0₃₀42"},
        {input: "0.000000000000000000000000000000042", expected: "0.0₃₁42"},
        {input: "0.0000000000000000000000000000000042", expected: "0.0₃₂42"},
        {input: "0.00000000000000000000000000000000042", expected: "0.0₃₃42"},
        {input: "0.000000000000000000000000000000000042", expected: "0.0₃₄42"},
        {input: "0.0000000000000000000000000000000000042", expected: "0.0₃₅42"},
        {input: "0.00000000000000000000000000000000000042", expected: "0.0₃₆42"},
        {input: "0.000000000000000000000000000000000000042", expected: "0.0₃₇42"},
        {input: "0.0000000000000000000000000000000000000042", expected: "0.0₃₈42"},
        {input: "0.00000000000000000000000000000000000000042", expected: "0.0₃₉42"},
        {input: "0.000000000000000000000000000000000000000042", expected: "0.0₄₀42"},
        {input: "0.0000000000000000000000000000000000000000042", expected: "0.0₄₁42"},
        {input: "0.00000000000000000000000000000000000000000042", expected: "0.0₄₂42"}
    ];

    tests.forEach((test, idx) => {
        const result = formatNumberWithSubscriptZeros(test.input);
        describe(`[${idx}] Input: ${test.input} | Formatted: ${result} | Expected: ${test.expected}`, () => {
            it('should format the number correctly', () => {
                expect(result).toBe(test.expected);
            });
        });
    });

    describe('Additional parameter tests', () => {
        it('should format numbers with different precision', () => {
            expect(formatNumberWithSubscriptZeros("0.00000123456", 4)).toBe("0.0₅1234");
            expect(formatNumberWithSubscriptZeros("0.0000042", 1)).toBe("0.0₅4");
            expect(formatNumberWithSubscriptZeros("0.00000402", 2)).toBe("0.0₅40");
            expect(formatNumberWithSubscriptZeros("0.000004022", 3)).toBe("0.0₅402");
            expect(formatNumberWithSubscriptZeros("0.000004020", 3)).toBe("0.0₅402");
        });

        it('should format numbers with different minimum values', () => {
            expect(formatNumberWithSubscriptZeros("0.00042", 3, 0.0001)).toBe("0.00042");
            expect(formatNumberWithSubscriptZeros("0.00000042", 3, 0.0000001)).toBe("0.00000042");
        });
    });
});