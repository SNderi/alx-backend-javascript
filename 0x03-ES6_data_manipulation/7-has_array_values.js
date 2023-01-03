export default function hasValuesFromArray(setList, arr) {
  for (const val of arr) {
    if (!setList.has(val)) {
      return false;
    }
  }
  return true;
}
