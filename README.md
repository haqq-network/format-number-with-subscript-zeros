# Format Number with Subscript Zeros

A library to format numbers by hiding leading zeros using subscript digits. This method is particularly useful for representing very small numbers in a compact and readable format. The subscript digits indicate the number of hidden zeros.

[Documentation](https://github.com/haqq-network/format-number-with-subscript-zeros/blob/master/docs/globals.md)

## Installation

```bash
yarn add @haqq/format-number-with-subscript-zeros
```

## Usage

```ts
import { formatNumberWithSubscriptZeros } from '@haqq/format-number-with-subscript-zeros';

console.log(formatNumberWithSubscriptZeros("0.42"));               // "0.42"
console.log(formatNumberWithSubscriptZeros("0.042"));              // "0.042"
console.log(formatNumberWithSubscriptZeros("0.0042"));             // "0.0042"
console.log(formatNumberWithSubscriptZeros("0.00042"));            // "0.00042"
console.log(formatNumberWithSubscriptZeros("0.000042"));           // "0.000042"
console.log(formatNumberWithSubscriptZeros("0.0000042"));          // "0.0₅42"
console.log(formatNumberWithSubscriptZeros("0.00000042"));         // "0.0₆42"
console.log(formatNumberWithSubscriptZeros("0.000000042"));        // "0.0₇42"
console.log(formatNumberWithSubscriptZeros("0.0000000042"));       // "0.0₈42"
console.log(formatNumberWithSubscriptZeros("0.00000000042"));      // "0.0₉42"
console.log(formatNumberWithSubscriptZeros("0.000000000042"));     // "0.0₁₀42"
console.log(formatNumberWithSubscriptZeros("0.0000000000042"));    // "0.0₁₁42"
console.log(formatNumberWithSubscriptZeros("0.00000000000042"));   // "0.0₁₂42"
```

### Additional Parameters

The formatNumberWithSubscriptZeros function accepts the following parameters:

 - numberStr (string): The number string to format.
 - presiction (number, optional): The number of decimal places to include in the formatted string. Default is 3.
 - min (number, optional): The minimum value for which the formatting should be applied. Default is 0.00001.

## Running Tests

```sh
yarn test
```

## Building the Project

```sh
yarn build
```

## Linting the Code

```sh
yarn lint
```

## Benefits and Convenience

This method of formatting numbers is particularly useful for:

	• Readability: It makes very small numbers easier to read and understand by representing leading zeros as subscript digits.
	• Compact Representation: It reduces the length of the number string by using subscript digits for leading zeros.
	• Scientific Applications: It is useful in scientific and engineering contexts where numbers can be extremely small and a clear representation is needed.

## How It Works

The function converts the number string to a floating-point number and checks if it is less than 0.01. If the number is larger, it returns the original string. For smaller numbers, it calculates the number of leading zeros and formats them as subscript digits.

## License

MIT
