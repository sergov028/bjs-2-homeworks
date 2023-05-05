function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if ("marks" in this === true) {
    this.marks.push(...marks);
  } else {
    marks = [];
  }
};

Student.prototype.getAverage = function () {
  if ("marks" in this === false || this.marks.length === 0) {
    return 0;
  }

  return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  delete this.setSubject;
  delete this.marks;

  this.excluded = reason;
};

/*let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)*/
