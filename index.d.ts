import Promise from "bluebird"

/**
 * Get the Earth Overshoot day.
 * @example
 * ```
 * const overShoot = require("overshoot");
 *
 * overShoot().then(console.log);
 * //=> '2019-07-28T12:00:00.000Z'
 * ```
*/
declare function overShoot(): Promise<Date>;

export = overShoot;
