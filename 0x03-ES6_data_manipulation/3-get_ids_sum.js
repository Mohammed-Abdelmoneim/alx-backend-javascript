import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(list) {
  const ids = getListStudentIds(list);
  const sum = ids.reduce((acc, curr) => acc + curr);

  return sum;
}
