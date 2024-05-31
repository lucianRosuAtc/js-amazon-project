import { formatCurrency } from "../scripts/utils/money.js";

if (formatCurrency(2005) === "20.05") {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
