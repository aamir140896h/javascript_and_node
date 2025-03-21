const isPrimeNUmber = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
console.log(isPrimeNUmber(10));
console.log(isPrimeNUmber(7));
console.log(isPrimeNUmber(11));
