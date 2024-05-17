const ParkMillerPRNG = require('./index');

describe('ParkMillerPRNG', () => {
    describe('next', () => {
        test('generates pseudorandom integers', () => {
            const prng = new ParkMillerPRNG(12345);
            expect(prng.next()).toEqual(expect.any(Number));
            expect(prng.next()).toEqual(expect.any(Number));
            expect(prng.next()).toEqual(expect.any(Number));
        });
    });

    describe('nextFloat', () => {
        test('generates pseudorandom floating-point numbers', () => {
            const prng = new ParkMillerPRNG(54321);
            expect(prng.nextFloat()).toBeGreaterThanOrEqual(0);
            expect(prng.nextFloat()).toBeLessThan(1);
            expect(prng.nextFloat()).toBeGreaterThanOrEqual(0);
            expect(prng.nextFloat()).toBeLessThan(1);
            expect(prng.nextFloat()).toBeGreaterThanOrEqual(0);
            expect(prng.nextFloat()).toBeLessThan(1);
        });
    });

    describe('integer', () => {
        test('generates pseudorandom integers', () => {
            const prng = new ParkMillerPRNG(12345);
            expect(prng.integer()).toEqual(expect.any(Number));
            expect(prng.integer()).toEqual(expect.any(Number));
            expect(prng.integer()).toEqual(expect.any(Number));
        });
    });

    describe('integerInRange', () => {
        test('generates pseudorandom integers within specified range', () => {
            const prng = new ParkMillerPRNG(54321);
            const min = 5;
            const max = 10;
            const result = prng.integerInRange(min, max);
            expect(result).toBeGreaterThanOrEqual(min);
            expect(result).toBeLessThanOrEqual(max);
        });
    });

    describe('float', () => {
        test('generates pseudorandom floating-point numbers', () => {
            const prng = new ParkMillerPRNG(12345);
            expect(prng.float()).toBeGreaterThanOrEqual(0);
            expect(prng.float()).toBeLessThan(1);
            expect(prng.float()).toBeGreaterThanOrEqual(0);
            expect(prng.float()).toBeLessThan(1);
            expect(prng.float()).toBeGreaterThanOrEqual(0);
            expect(prng.float()).toBeLessThan(1);
        });
    });

    describe('floatInRange', () => {
        test('generates pseudorandom floating-point numbers within specified range', () => {
            const prng = new ParkMillerPRNG(54321);
            const min = 1.5;
            const max = 2.5;
            const result = prng.floatInRange(min, max);
            expect(result).toBeGreaterThanOrEqual(min);
            expect(result).toBeLessThanOrEqual(max);
        });
    });

    describe('boolean', () => {
        test('generates pseudorandom boolean values', () => {
            const prng = new ParkMillerPRNG(12345);
            expect(prng.boolean()).toEqual(expect.any(Boolean));
            expect(prng.boolean()).toEqual(expect.any(Boolean));
            expect(prng.boolean()).toEqual(expect.any(Boolean));
        });
    });
});
