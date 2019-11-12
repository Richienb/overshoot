import test from "ava"
import isDateObject from "is-date-object"
import overShoot from "."

test("main", async (t) => {
    t.true(isDateObject(await overShoot()))
})
