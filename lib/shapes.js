class Shape{
    constructor(colorShape){
        this.colorShape = colorShape;
    }
}

class Square extends Shape{
  constructor(colorShape){
    super(colorShape);
  }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="73" y="40" width="160" height="160" fill="${this.colorShape}" /></svg>;`;
    }
}

class Circle extends Shape {
  constructor(colorShape){
    super(colorShape);
  }
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="115" r="80" fill="${this.colorShape}" /></svg>;`;
    }
  }

  class Triangle extends Shape {
    constructor(colorShape){
      super(colorShape);
    }
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.colorShape}" /></svg>;`;
    }
  }

  const shape = new Triangle('blue');
  console.log(shape.render());



  module.exports = Shape;
  module.exports = Circle;
  module.exports = Triangle;
  module.exports = Square;