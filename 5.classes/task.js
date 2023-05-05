//Задача 1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(replaceState) {
    if (replaceState < 0) {
      this._state = 0;
    } else if (replaceState > 100) {
      this._state = 100;
    } else {
      this._state = replaceState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

//задача 2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice([i], 1)[0];
      }
    }
    return null;
  }
}

//Задача 3

class Student {
  constructor(name) {
    this.studentName = name;
    this.subjMarks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return "Неверная оценка";
    }
    if (this.subjMarks[subject] === undefined) {
      this.subjMarks[subject] = [mark];
    } else {
      this.subjMarks[subject].push(mark);
    }
  }

  getAverageBySubject(subject) {
    if (this.subjMarks[subject] === undefined) {
      return 0;
    }
    return (
      this.subjMarks[subject].reduce((sum, mark) => sum + mark, 0) /
      this.subjMarks[subject].length
    );
  }

  getAverage() {
    let sumAverage = 0;
    let subjects = Object.keys(this.subjMarks);

    subjects.forEach((item) => (sumAverage += this.getAverageBySubject(item)));
    return sumAverage / subjects.length;
  }
}
