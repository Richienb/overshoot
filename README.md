# Overshoot [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/overshoot/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/overshoot)

Get the Earth Overshoot day.

[![NPM Badge](https://nodei.co/npm/overshoot.png)](https://npmjs.com/package/overshoot)

## Install

```sh
npm install overshoot
```

## Usage

```js
const overShoot = require("overshoot");

overShoot().then(console.log);
//=> '2019-07-28T12:00:00.000Z'
```

## API

### overShoot()

Returns: `Promise<Date>`

Get the Earth Overshoot day.
