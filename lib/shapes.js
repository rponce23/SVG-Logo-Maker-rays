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



  module.exports = Shape;
  module.exports = Square;