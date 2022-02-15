const ccxt = require('ccxt')
const exchange = new ccxt.bybit()
let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const fetchPriceForSymbol = async (symbol = 'ETH/USD') => {
  const orders = exchange
    .fetchTicker(symbol)
    .then((ticker) => console.log(ticker))
}

const fetchOHLCV = async (
  symbol = 'ETH/USD',
  since = exchange.parse8601('2022-02-15T00:00:00Z'),
  timeframe = '5m',
) => {
  if (exchange.has.fetchOHLCV) {
    await sleep(exchange.rateLimit) // milliseconds
    exchange.fetchOHLCV(symbol, timeframe, since).then((res) => {
      console.log(res)
    })
  }
}

fetchOHLCV()
