Object.prototype.setMinutesToLastFiveMinuteInterval = function () {
  const lastFiveMinuteInterval = this.getMinutes() - (this.getMinutes() % 5)
  this.setMinutes(lastFiveMinuteInterval)
  return this
}

Object.prototype.resetSecondsAndMilliseconds = function () {
  this.setSeconds(0)
  this.setMilliseconds(0)
  return this
}

const iso8601ToUnix = (_timestamp = new Date()) => {
  return Math.round(_timestamp.getTime())
}

const getLastFiveMinuteIntervalUnix = (_timestamp = new Date()) => {
  const timestamp = _timestamp
  timestamp.setMinutesToLastFiveMinuteInterval()
  timestamp.resetSecondsAndMilliseconds()
  return iso8601ToUnix(timestamp)
}

const getLastFiveMinuteInterval = (_timestamp = new Date()) => {
  const timestamp = _timestamp
  timestamp.setMinutesToLastFiveMinuteInterval()
  timestamp.resetSecondsAndMilliseconds()
  return timestamp
}

console.log('Exact time now: ', iso8601ToUnix(new Date()))
console.log('Unix from calc', getLastFiveMinuteIntervalUnix())
// console.log('Last 5min interval unix', getLastFiveMinuteIntervalUnix())

exports.getLastFiveMinuteInterval = getLastFiveMinuteIntervalUnix()
