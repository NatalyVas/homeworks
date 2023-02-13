class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(state) {
    this._state = state;
    if (this._state < 0) {
      this._state = 0;
    } else if (this._state > 100) {
      this._state = 100;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state, type);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state, type);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "detective";
  }
}

class Library {
  constructor(name, books = []) {
    this.name = name;
    this.books = books;
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let book of this.books) {
      for (let key in book) {       
        if (key === type) {
           if (book[key] === value) {
           return book; 
          }
        }
      }      
    }
    return null; 
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      let book = this.books[i];
      if (this.books[i].name === bookName) {
        this.books.splice(i, 1);       
        return book;
      }
    }
    return null;
  }
  
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
     }
    //if (Object.keys(this.marks).length != 0) {
      if (this.marks.hasOwnProperty(subject)) {
        this.marks[subject].push(mark);
      } else {
        this.marks[subject] = [];
        this.marks[subject].push(mark);
      }
    //} else {
        //this.marks[subject] = [];
        //this.marks[subject].push(mark);
    //}
  }

  getAverageBySubject(subject) {
    if (!this.marks.hasOwnProperty(subject)) {
      return 0;
    }
    let sum = this.marks[subject].reduce((previousMark, currentMark) => previousMark + currentMark);
    return sum / this.marks[subject].length;
  }

  getAverage() {
    let subjects = Object.keys(this.marks);
    let sum;
    if (subjects.length != 0) {
      sum = subjects.reduce((previousSubject, currentSublect) => this.getAverageBySubject(previousSubject) + this.getAverageBySubject(currentSublect));
    } else {
      return 0;
    }
    return sum / subjects.length;
  }
}