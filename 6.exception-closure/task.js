function parseCount(unit) {
  let parse = Number.parseFloat(unit);
  if (Number.isNaN(parse)) {
    throw new Error("Невалидное значение");
  }
  return parse;
}

function validateCount(unit) {
  try {
    return parseCount(unit);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || b + c < a || c + a < b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }


  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    let p = this.perimeter * 0.5;
    return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
  }  
}
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      let triangle = {        
        get perimeter() {
          return "Ошибка! Треугольник не существует"
        },
        get area() {
          return "Ошибка! Треугольник не существует"
        }
      }
      return triangle;
    }
  }