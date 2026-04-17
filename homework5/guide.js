// homework5/guide.js
window.homeworkGuides = window.homeworkGuides || {};

window.homeworkGuides[6] = {
  title: "Homework 5",
  questions: {
    1: {
      I: {
        prompt: "What is the new value?",
        inputs: [
          {  label: "value", type: "number", tolerance: 0.05}
        ],
        versions: {
          a: [-42.487],
          b: [-27.436],
          c: [0.034],
          d: [-13.193],
          e: [-27.506]
        }
      },
      II: {
        prompt: "What is the new value?",
        inputs: [
          {  label: "value", type: "number", tolerance: 0.05}
        ],
        versions: {
          a: [29.7],
          b: [9.078],
          c: [-73.81],
          d: [-86.53],
          e: [423.643]
        }
      },
      III: {
         prompt: "What is the new value?",
        inputs: [
          {  label: "value", type: "number", tolerance: 0.05}
        ],
        versions: {
          a: [-44.052],
          b: [-70.44],
          c: [86.63],
          d: [93.523],
          e: [28.22]
        }
        
      },
      IV: {
         prompt: "What is the new value?",
        inputs: [
          {  label: "value", type: "number", tolerance: 0.05}
        ],
        versions: {
          a: [44.742],
          b: [0.033],
          c: [-74.94],
          d: [-86.83],
          e: [-30.873]
        }
        
      },
      V: {
        prompt: "What is the new value?",
        inputs: [
          {  label: "value", type: "number", tolerance: 0.05}
        ],
        versions: {
          a: [29.966],
          b: [-51.035],
          c: [31.416],
          d: [0.032],
          e: [-46.092]
        }
        
      }
    },
  2: {
      I: {
        prompt: "What is the cable gain",
        inputs: [
          {  label: "dB", type: "number", tolerance: 0.05}
        ],
        versions: {
          a: [-0.0846],
          b: [-0.045],
          c: [-2.756],
          d: [-0.105],
          e: [-1.159]
        }
      },
      II: {
        prompt: "What is the voltage at the antenna",
        inputs: [
          {  label: "dBuV", type: "number", tolerance: 0.05}
        ],
        versions: {
          a: [39.385],
          b: [28.295],
          c: [38.886],
          d: [45.005],
          e: [55.779]
        }
      },
      III: {
        prompt: "What is the electric field intensity at the antenna",
        inputs: [
          {  label: "dBuV/m", type: "number", tolerance: 0.05}
        ],
        versions: {
          a: [38.125],
          b: [23.621],
          c: [40.751],
          d: [44.812],
          e: [53.531]
        }
        
      },
      IV: {
        prompt: "What is the margin of pass/failure",
        inputs: [
          {  label: "dBuV/m (value >0 if pass, value <0 if fail)", type: "number", tolerance: 0.05}
        ],
        versions: {
          a: [6.337],
          b: [13.451],
          c: [-9.797],
          d: [-7.798],
          e: [-18.860]
        }
        
      },
      
    },
    3: {
      I: {
        prompt: "What is the magnitude of ID",
        inputs: [
          {  label: "nA", type: "number", tolerance: 0.05}
        ],
        versions: {
          a: [14.305],
          b: [0.1],
          c: [0.35],
          d: [0.36],
          e: [52.3]
        }
      },
       II: {
        prompt: "What is the magnitude of ID",
        inputs: [
          {  label: "nA", type: "number", tolerance: 0.05}
        ],
        versions: {
          a: [5.985],
          b: [0.2],
          c: [0.55],
          d: [6.04],
          e: [1.3]
        }
      },
    III: {
        prompt: "What is the total electric field intensity due to ID and IC",
        inputs: [
          {  label: "dBuV/m", type: "number", tolerance: 0.05}
        ],
        versions: {
          a: [-11.588],
          b: [-76.167],
          c: [-176.95],
          d: [-136.068],
          e: [-126.712]
        }
      }, 
    IV: {
        prompt: "What is the margin of pass/failure",
        inputs: [
          {  label: "dBuV/m (value >0 if pass, value <0 if fail)", type: "number", tolerance: 0.05}
        ],
        versions: {
          a: [49.144],
          b: [107.327],
          c: [214.278],
          d: [180.492],
          e: [182.461]
        }
        
      }  
    }
    
  }
};

