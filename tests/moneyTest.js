import { formatCurrency } from "../scripts/utils/money.js";

console.log('Test suite: formatCurrency')

console.log('Converts cents into dollars')
if (formatCurrency(2005) === "20.05") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log('Works with 0')
if (formatCurrency(0) === "0.00") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log('rounds up to the nearest cent')
if (formatCurrency(2000.5) === "20.01") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log('rounds down to the nearest cent')
if (formatCurrency(2000.4) === "20.00") {
  console.log("passed");
} else {
  console.log("failed");
}
