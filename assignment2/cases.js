const factorial = (n) => {
  let res = 1;
  for(let i  = n; i >= 1; --i)
    res *= i;
  return res;
}

const permutation = (n, r) => {
  return factorial(n) / factorial(n - r);
}

const multiPermutation = (n, r) => {
  return n ** r;
}

const combination = (n, r) => {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

const multiCombination = (n, r) => {
  return combination(n + r - 1, r);
}

module.exports = {
  permutation,
  multiPermutation,
  combination,
  multiCombination,
};