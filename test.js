'use strict'

const assert = require('assert')
const clearModule = require('clear-module')

process.env.CI = 'true'

let isNotCI = require('./')
assert(!isNotCI)

delete process.env.CI
delete process.env.CONTINUOUS_INTEGRATION

clearModule('./')
clearModule('ci-info')
isNotCI = require('./')
assert(isNotCI)