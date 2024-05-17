class ParkMillerPRNG {
    constructor(seed) {
        this.seed = seed % 2147483647;
        if (this.seed <= 0) this.seed += 2147483646;
    }

    next() {
        return this.seed = this.seed * 16807 % 2147483647;
    }

    nextFloat() {
        return (this.next() - 1) / 2147483646;
    }

    /**
     * Generates a pseudorandom integer.
     * @returns {number} The pseudorandom integer.
     */
    integer() {
        return Math.floor(this.nextFloat() * Number.MAX_SAFE_INTEGER);
    }

    /**
     * Generates a pseudorandom integer within the specified range.
     * @param {number} min - The minimum value (inclusive).
     * @param {number} max - The maximum value (inclusive).
     * @returns {number} The pseudorandom integer within the specified range.
     */
    integerInRange(min, max) {
        return Math.floor(this.nextFloat() * (max - min + 1)) + min;
    }

    /**
     * Generates a pseudorandom floating-point number.
     * @returns {number} The pseudorandom floating-point number.
     */
    float() {
        return this.nextFloat();
    }

    /**
     * Generates a pseudorandom floating-point number within the specified range.
     * @param {number} min - The minimum value.
     * @param {number} max - The maximum value.
     * @returns {number} The pseudorandom floating-point number within the specified range.
     */
    floatInRange(min, max) {
        return this.nextFloat() * (max - min) + min;
    }

    /**
     * Generates a pseudorandom boolean value.
     * @returns {boolean} The pseudorandom boolean value.
     */
    boolean() {
        return this.nextFloat() < 0.5;
    }
}

module.exports = ParkMillerPRNG;
