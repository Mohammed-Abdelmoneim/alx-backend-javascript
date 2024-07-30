export default function updateStudentGradeByCity(list, city, newGrades) {
  const newArr = list.filter((item) => item.location === city);

  const combined = newArr.map((item) => {
    const idGrade = newGrades.find((grade) => grade.studentId === item.id);
    return {
      ...item,
      grade: idGrade ? idGrade.grade : 'N/A',
    };
  });

  return combined;
}
