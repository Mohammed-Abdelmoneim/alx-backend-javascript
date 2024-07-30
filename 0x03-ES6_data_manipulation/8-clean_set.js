export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  const arr = Array.from(set);
  const result = arr
    .filter((element) => String(element).startsWith(startString))
    .map((element) => String(element).slice(startString.length))
    .join('-');

  return result;
}
