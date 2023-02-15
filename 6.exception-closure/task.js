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
  constructor(a, b, c, perimeter, area) {
    if (a + b < c || b + c < a || c + a < b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
    this.perimeter = perimeter;
    this.area = area;
  }
  set perimeter(perimeter) {
    this._perimeter = this.a + this.b + this.c;
  }
  get perimeter() {
    return this._perimeter;
  }
  set area(area) {
    let p = (this.a + this.b + this.c) * 0.5;
    this._area = +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
  }
  get area() {
    return this._area;
  }
  

}
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      let triangle = {
        perimeter : "Ошибка! Треугольник не существует",
        area : "Ошибка! Треугольник не существует",      
      }
      return triangle;
    }
  }