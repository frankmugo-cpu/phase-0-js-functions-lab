function calculateTax(amount){
    return amount *0.10;
}
function convertToUpperCase(text) {
  return text.toUpperCase();
}
function findMaximum(num1, num2) {
  return Math.max(num1, num2);
}
function isPalindrome(word) {
  const cleaned = word.toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = originalPrice * (discountPercentage / 100);
  return originalPrice - discountAmount;
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };