// homework3/guide.js
window.homeworkGuides = window.homeworkGuides || {};

window.homeworkGuides[3] = {
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
          { label: "m", type: "number", tolerance: 0.05 }
        ],
        versions: {
          a: [0.608],
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
          { label: "m", type: "number", tolerance: 0.05 }
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
    },
  2: {
      I: {
        prompt: "Is this dipole considered Hertzian?",
        inputs: [
          { label: "Answer (Yes or No):",      type: "text"}
        ],
        versions: {
          a: ["Yes"],
          b: ["Yes"],
          c: ["Yes"],
          d: ["Yes"],
          e: ["Yes"]
        }
      },
      II: {
        prompt: "What is the amount of current needed?",
        inputs: [
          { label: "A", type: "number", tolerance: 0.05 }
        ],
        versions: {
          a: [3.142],
          b: [10.579],
          c: [6.532],
          d: [2.536],
          e: [0.323]
        }
      },
      III: {
        prompt: "What is the amount of power loss?",
        inputs: [
          { label: "mW", type: "number", tolerance: 0.05 }
        ],
        versions: {
          a: [25.14],
          b: [3949.940],
          c: [893.884],
          d: [61.260975],
          e: [26.074]
        }
        
      },
      IV: {
        prompt: "What is efficiency?",
        inputs: [
          { label: "%", type: "number", tolerance: 0.05 }
        ],
        versions: {
          a: [96.64],
          b: [54.702],
          c: [67.063],
          d: [85.851],
          e: [36.037]
        }
        
      },
      V: {
        prompt: "What is the power density?",
        inputs: [
          { label: "nW/m^2 (n = 10^-9)", type: "number", tolerance: 0.05 }
        ],
        versions: {
          a: [26.186],
          b: [14371.292],
          c: [1.798],
          d: [279.969],
          e: [0.005]
        }
        
      }
    },
    3: {
      I: {
        prompt: "What is the phase shift?",
        inputs: [
          { label: "Answer (Yes or No):",      type: "number", tolerance: 0.05}
        ],
        versions: {
          a: [-48.793],
          b: [1231.938],
          c: [51.419],
          d: [-752.030],
          e: [-64.951]
        }
      },
      
    }
    
  }
};


