// homework4/guide.js
window.homeworkGuides = window.homeworkGuides || {};

window.homeworkGuides[4] = {
  title: "Homework 4 - Pink Floyd's Dark Side of the Moon",
  questions: {
    1: {
      I: {
        prompt: "What is the intersection point (x,y) of the first wavelength on the right side of the prism?",
        inputs: [
          { label: "(X.XXX, Y.YYY) - slight differences may occur :",      type: "text"}
        ],
        versions: {
          a: ["(0.414, 0.149)"],
          b: ["(0.531, -0.053)"],
          c: ["(0.451, 0.085)"],
          d: ["(0.426, 0.128)"],
          e: ["(0.450, 0.086)"],
          f: ["(0.514, -0.024)"]
        }
      },
      II: {
        prompt: "Given that x = 2, what is the y value for the first wavelength for the ray exiting the prism?",
        inputs: [
          { label: "y=Y.YYY", type: "number", tolerance: 0.05 }
        ],
        versions: {
          red: [0.608],
          b: [-0.539],
          c: [0.132],
          d: [0.522],
          e: [0.16],
          f: [-0.525]
        }
      },
      III: {
        prompt: "What is the intersection point (x,y) of the second wavelength on the right side of the prism?",
        inputs: [
          { label: "(X.XXX, Y.YYY) - slight differences may occur :",      type: "text"}
        ],
        versions: {
          a: ["(0.421, 0.137)"],
          b: ["(0.537, -0.065)"],
          c: ["(0.457, 0.074)"],
          d: ["(0.429, 0.123)"],
          e: ["(0.492, 0.015)"],
          f: ["(0.523, -0.04)"]
        }
        
      },
      IV: {
        prompt: "Given that x = 2, what is the y value for the second wavelength for the ray exiting the prism?",
        inputs: [
          { label: "y = Y.YYY ", type: "number", tolerance: 0.05 }
        ],
        versions: {
          a: [0.505],
          b: [-0.702],
          c: [0.024],
          d: [0.486],
          e: [-0.801],
          f: [-0.784]
        }
      }
    }
    
  }
};


