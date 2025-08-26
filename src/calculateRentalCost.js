/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const result = 40;
  const sum = result * days;

  if (days >= 7) {
    return sum - 50;
  }

  if (days >= 3 && days < 7) {
    return sum - 20;
  }

  return sum;
}

module.exports = calculateRentalCost;
