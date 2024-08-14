export default function updateStudentGradeByCity(students, location, newGrades) {
  return students
    .filter((student) => student.location === location)
    .map((student) => {
      const grade = newGrades.find((g) => g.studentId === student.id);
      return { ...student, grade: (grade && grade.grade) || 'N/A' };
    });
}
