const RSI = require("technicalindicators").RSI;

const inputRSI = {
  values: [
    127.75, 129.02, 132.75, 145.4, 148.98, 137.52, 147.38, 139.05, 137.23,
    149.3, 162.45, 178.95, 200.35, 221.9, 243.23, 243.52, 286.42, 280.27,
    277.35, 269.02, 263.23, 214.9,
  ],
  period: 14,
};
const expectedResult = [86.41, 86.43, 89.65, 86.5, 84.96, 80.54, 77.56, 58.06];

console.log(RSI.calculate(inputRSI));
