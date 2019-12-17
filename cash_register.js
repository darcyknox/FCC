// A cash register that calculates the amount of change to return, given the
// amount and types of notes in the register, as well as the price and the cash
// given by the customer.

function checkCashRegister(price, cash, cid) {
 let change = cash - price;
 let cashValues = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
 let result = {
   'status': "",
   'change': []
 }

 // calculate total change in register
 let totalCID = 0;
 for (let i = 0; i < cid.length; i++) {
   totalCID += cid[i][1];
   totalCID = Math.round(totalCID * 100) / 100;
 }

 // if (no change), else if (can't give full change)
 if (change === 0 || change === totalCID) {
   result.status = "CLOSED";
   result.change.push(...cid);
   return result;
 } else if (totalCID < change) {
   result.status = "INSUFFICIENT_FUNDS";
   return result;
 }

 // giving change
 for (let i = cashValues.length - 1; i >= 0; i--) {
   let changeTypeTotal = 0.00;
   // while there's change owed, and change in the drawer
   while (change >= cashValues[i] && cid[i][1] > 0) {
     change -= cashValues[i];
     /* Fixes rounding error */
     change = Math.round(change * 100) / 100;
     cid[i][1] -= cashValues[i];
     changeTypeTotal += cashValues[i];
   }
   result.status = "OPEN";
   // only add change > 0 given to the object
   if (changeTypeTotal) {
     result.change.push([cid[i][0], changeTypeTotal]);
   }
 }
 // if the register can't give the exact change
 if (change > 0) {
   result.status = "INSUFFICIENT_FUNDS";
   result.change = [];
 }
 // Here is your change, ma'am.
 return result;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(20, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(20, 500, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
