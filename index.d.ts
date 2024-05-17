/**
 * Park-Miller pseudorandom number generator (PRNG) implementation.
 */
declare class ParkMillerPRNG {
    /**
     * Constructs a new Park-Miller PRNG with the specified seed.
     * @param seed The seed value for the PRNG.
     */
    constructor(seed: number);

    /**
     * Generates the next pseudorandom integer in the sequence.
     * @returns The next pseudorandom integer.
     */
    next(): number;

    /**
     * Generates the next pseudorandom floating-point number in the sequence.
     * @returns The next pseudorandom floating-point number between 0 (inclusive) and 1 (exclusive).
     */
    nextFloat(): number;

    /**
     * Generates a pseudorandom integer.
     * @returns The pseudorandom integer.
     */
    integer(): number;

    /**
     * Generates a pseudorandom integer within the specified range.
     * @param min The minimum value (inclusive).
     * @param max The maximum value (inclusive).
     * @returns The pseudorandom integer within the specified range.
     */
    integerInRange(min: number, max: number): number;

    /**
     * Generates a pseudorandom floating-point number.
     * @returns The pseudorandom floating-point number.
     */
    float(): number;

    /**
     * Generates a pseudorandom floating-point number within the specified range.
     * @param min The minimum value.
     * @param max The maximum value.
     * @returns The pseudorandom floating-point number within the specified range.
     */
    floatInRange(min: number, max: number): number;

    /**
     * Generates a pseudorandom boolean value.
     * @returns The pseudorandom boolean value.
     */
    boolean(): boolean;
}

export = ParkMillerPRNG;
