export default function updateUniqueItems(map) {
  return map.forEach((key, val) => {
    if (key === 1) {
      try {
        map.set(val, 100);
      } catch (e) {
        throw new Error('Cannot process');
      }
    }
  });
}
