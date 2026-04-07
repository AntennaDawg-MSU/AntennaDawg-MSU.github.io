// homework4/guide.js
window.homeworkGuides = window.homeworkGuides || {};

window.homeworkGuides[5] = {
  title: "Homework 4 - Finite Difference Technique",
  questions: {
    1: {
      I: {
        prompt: "What is the voltage?",
        inputs: [
          { label: "V =V.VVV",      type: "number", tolerance: 0.05}
        ],
        versions: {
          a: [21.650],
          b: [-7.470],
          c: [7.074],
          d: [-9.062],
          e: [5.25],
          f: [-3.757]
        }
      },
      II: {
        prompt: "What is the maximum difference change in voltage between this generation and the one prior?",
        inputs: [
          { label: "DeltaV = V.VVV", type: "number", tolerance: 0.05 }
        ],
        versions: {
          a: [1.799],
          b: [0.460],
          c: [1.494],
          d: [1.562],
          e: [1.500],
          f: [0.434]
        }
      }
    }
    
  }
};



