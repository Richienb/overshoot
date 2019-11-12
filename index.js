"use strict"

const got = require("got")
const { load } = require("cheerio")
const toBluebird = require("to-bluebird")
const _ = require("lodash")
const day = require("dayjs")

module.exports = () => toBluebird(got("https://www.overshootday.org/newsroom/past-earth-overshoot-days/"))
    .then(({ body }) => load(body))
    .then(($) => $("div.col.span_12.dark.left > div.vc_col-sm-4.wpb_column.column_container.vc_column_container.col.no-extra-padding > div > div > div > div > p"))
    .then((els) => els.last())
    .then((el) => el.text())
    .then((res) => res.split("\n"))
    .then((res) => _.last(res))
    .then((res) => day(res, { utc: true }))
    .then((day) => day.toDate())
