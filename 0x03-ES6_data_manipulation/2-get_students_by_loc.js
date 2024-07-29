export default function getStudentsByLocation(list, city) {
  const newArr = list.filter((item) => item.location === city);

  return newArr;
}
