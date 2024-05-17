# ParkMiller-Random

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/parkmiller-random.svg)](https://www.npmjs.com/package/parkmiller-random)

ParkMiller-Random is a lightweight JavaScript library for generating pseudorandom numbers using the Park-Miller algorithm.

## Installation

You can install ParkMiller-Random via npm:

```
npm install parkmiller-random
```

## Usage

```javascript
const ParkMillerRandom = require('parkmiller-random');

// Create a new instance of ParkMillerRandom with a seed
const prng = new ParkMillerRandom(12345);

// Generate pseudorandom integer
const randomInt = prng.integer();

// Generate pseudorandom integer within range
const randomIntInRange = prng.integerInRange(10, 100);

// Generate pseudorandom floating-point number
const randomFloat = prng.float();

// Generate pseudorandom floating-point number within range
const randomFloatInRange = prng.floatInRange(0.5, 1.5);

// Generate pseudorandom boolean value
const randomBool = prng.boolean();
```

## API

### `constructor(seed: number)`

Constructs a new ParkMillerRandom instance with the specified seed.

### `integer(): number`

Generates a pseudorandom integer.

### `integerInRange(min: number, max: number): number`

Generates a pseudorandom integer within the specified range.

### `float(): number`

Generates a pseudorandom floating-point number.

### `floatInRange(min: number, max: number): number`

Generates a pseudorandom floating-point number within the specified range.

### `boolean(): boolean`

Generates a pseudorandom boolean value.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.