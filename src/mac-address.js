const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
 const pattern = /^([0-9A-F]{2}[-]){5}([0-9A-F]{2})$/;
 return pattern.test(n);
}




/* const salesData = [
  { product: 'Laptop', category: 'Electronics', sales: 1000 },
  { product: 'Phone', category: 'Electronics', sales: 500 },
  { product: 'Shirt', category: 'Clothing', sales: 50 },
  { product: 'Jeans', category: 'Clothing', sales: 80 },
  { product: 'Blender', category: 'Home Appliances', sales: 200 },
]; */
 //reduce
/*  function getTotalSalesByCategory(arr) {
 return arr.reduce((resObj, item) => {
   if (!resObj[item.category]) {
    resObj[item.category] = 0;
   } 
   resObj[item.category] += item.sales;
   return resObj;
 }, {})
} */ 

 //forEach
  
module.exports = {
  isMAC48Address
};
