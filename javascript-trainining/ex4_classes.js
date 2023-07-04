// class ClassName { 
//     constructor(param1, param2) { 

//     }

//     fields = "";
//     myMethods() { 

//     }
// }

//new ClassName(param1Value, param2Value);

class Color {
  constructor(r, g, b) {
    // Assign the RGB values as a property of `this`.
    this.values = [r, g, b];
  }
}

const myColor = new Color(255, 0, 0);
console.log(myColor.values);

class Color1 {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  getRed() {
    return this.values[0];
  }
}

const red = new Color1(255, 0, 0);
console.log(red.getRed()); // 255

