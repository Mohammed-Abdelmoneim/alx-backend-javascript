export default function cleanSet(set, startString) {
  const arr = Array.from(set);

  if (!startString) return '';

  const result = arr
    .filter((element) => String(element).startsWith(startString))
    .map((element) => String(element).slice(startString.length))
    .join('-');

  return result;
}
