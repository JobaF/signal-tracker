Object.prototype.setMinutesToLastFiveMinuteInterval = function () {
  const timestampThis = this.setMinutes(
    this.getMinutes() - (this.getMinutes() % 5),
  )
  const MS_PER_MINUTE = 60000
  const subtractedDate = new Date(timestampThis - 5 * MS_PER_MINUTE)
  this.setTime(subtractedDate)
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

exports.getLastFiveMinuteInterval = getLastFiveMinuteIntervalUnix()
