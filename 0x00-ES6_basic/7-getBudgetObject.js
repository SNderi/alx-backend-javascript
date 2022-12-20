export default function getBudgetObject(...allArgs) {
  const budget = { income: allArgs[0], gdp: allArgs[1], capita: allArgs[2] };

  return budget;
}
