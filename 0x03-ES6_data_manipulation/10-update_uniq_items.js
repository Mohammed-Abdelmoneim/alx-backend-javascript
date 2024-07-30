export default function updateUniqueItems(map) {
  return map.forEach((key, val) => {
    if (key === 1) {
      map.set(val, 100);
    }
  });
}
