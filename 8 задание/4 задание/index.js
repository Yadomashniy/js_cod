function giveJobToStudent(student, jobName) {
  const fullName = student.fullName;
  const updatedStudent = { ...student, job: jobName };
  const message = `Поздравляем! У студента ${fullName} появилась новая работа! Теперь он ${jobName}`;
  alert(message);
  return updatedStudent;
}

const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React']
};

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
console.log(updatedStudent);