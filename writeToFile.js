const fs = require('fs')

Object.prototype.addTimestampToJson = function () {
  this.timestamp = new Date()
  return this
}

Object.prototype.addIdToJson = function (filename = 'log') {
  const jsonFromFile = getJsonFromJsonFile(filename)
  const lastIndex = jsonFromFile.at(-1).id
  console.log(lastIndex)
  if (!isNaN(lastIndex)) {
    this.id = lastIndex + 1
  }
  return this
}

const getJsonFromJsonFile = (filename = 'log') => {
  const logData = fs.readFileSync(`${filename}.json`, 'utf-8')
  const jsonParsedLogData = JSON.parse(logData)
  return jsonParsedLogData
}

const appendJsonObjectToJsonFile = (filename = 'log', jsonObject) => {
  if (jsonObject != null) {
    let jsonFromFile = getJsonFromJsonFile(filename)
    jsonFromFile.push(jsonObject)
    const newJsonData = JSON.stringify(jsonFromFile)
    fs.writeFileSync(`${filename}.json`, newJsonData, 'utf-8')
  }
}

const addTimestampToJson = (jsonObject) => {
  jsonObject.timestamp = new Date()
  return jsonObject
}

const jsonTest = {}.addIdToJson().addTimestampToJson()

appendJsonObjectToJsonFile('log', jsonTest)
