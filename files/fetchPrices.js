const ccxt = require("ccxt");
const exchange = new ccxt.bybit();
const { getLastFiveMinuteInterval } = require("./getLastOHLCVTimestamp");

const fetchPriceForSymbol = async (symbol = "ETH/USD") => {
  const orders = exchange
    .fetchTicker(symbol)
    .then((ticker) => console.log(ticker));
};

const fetchOHLCV = async (symbol = "ETH/USD", since, timeframe) => {
  let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  if (exchange.has.fetchOHLCV) {
    await sleep(exchange.rateLimit); // milliseconds
    exchange.fetchOHLCV(symbol, timeframe, since).then((res) => {
      console.log(res);
    });
  }
};

const printLastFiveMinOHLCV = async (
  symbol = "ETH/USD",
  since = getLastFiveMinuteInterval,
  timeframe = "5m"
) => {
  if (exchange.has.fetchOHLCV) {
    exchange.fetchOHLCV(symbol, timeframe, since).then((res) => {
      console.log(res[0]);
    });
  }
};

printLastFiveMinOHLCV();
