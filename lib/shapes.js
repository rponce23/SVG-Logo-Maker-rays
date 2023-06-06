class Shape{
    constructor(colorShape, colorText){
        this.colorShape = colorShape;
        this.colorText = colorText;
    }
}

class Square extends Shape{
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="73" y="40" width="160" height="160" fill="${this.colorShape}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorText}">SVG</text></svg>;`;
    }
}

class Circle extends Shape {
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="115" r="80" fill="${this.colorShape}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorText}">SVG</text></svg>;`;
    }
  }

  class Triangle extends Shape {
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.colorShape}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorText}">SVG</text></svg>;`;
    }
  }

  module.exports = Shape;
  module.exports = Circle;
  module.exports = Triangle;
  module.exports = Square;