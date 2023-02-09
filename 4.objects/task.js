function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];  
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;  
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty("marks")) {
    this.marks = [...this.marks, ...marks];
  }  
}

Student.prototype.getAverage = function () {
  if (this.hasOwnProperty("marks") != true || this.marks.length === 0) {
    return 0;
  } else {
    let average = this.marks.reduce((previousIndex, currentIndex, index, array) => {
     if (index === array.length - 1) {
       return (previousIndex + currentIndex) / array.length; 
     } else return previousIndex + currentIndex
    }, 0);
    return average;
  }  
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason; 
}
