/**
 * Formats a number string using scientific notation with subscript zeros.
 * 
 * @param numberStr - The number string to format.
 * @param presiction - The number of decimal places to include in the formatted string. Default is 3.
 * @param min - The minimum value for which the formatting should be applied. Default is 0.00001.
 * @returns The formatted number string.
 */
export function formatNumberWithSubscriptZeros(numberStr: string, presiction = 3, min = 0.00001): string {
    const number = parseFloat(numberStr);
    if (number >= min) {
        const [part0, part1] = numberStr.split('.')
        if(part1) {
            const leadingZeros = part1?.match?.(/^0+/)?.[0] || '';
            return `${part0}.${leadingZeros}${part1.replace(leadingZeros, '').slice(0, presiction)}`
        }
        return part1 ? [part0, part1.slice(0, presiction)].join('.') : part0;
    }

    const leadingZerosMatch = numberStr.match(/^0\.(0+)/);
    if (!leadingZerosMatch) return numberStr;

    const leadingZerosCount = leadingZerosMatch[1].length;
    const remainingDigits = numberStr.slice(leadingZerosMatch[0].length);

    const smallCount = String(leadingZerosCount).split('').map(digit => String.fromCharCode(8320 + parseInt(digit))).join('');

    return `0.0${smallCount}${remainingDigits.slice(0, presiction)}`;
}