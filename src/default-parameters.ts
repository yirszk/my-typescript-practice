export {};

const nextYearSalary = (currentSalaty: number, rate: number = 1.1): number => {
  return currentSalaty * rate;
};

console.log(nextYearSalary(1000));
