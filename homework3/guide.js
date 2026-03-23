// homework3/guide.js
window.homeworkGuides = window.homeworkGuides || {};

window.homeworkGuides[3] = {
  title: "Homework 3",
  questions: {
    1: {
      I: {
        prompt: "Is this loop considered small?",
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
        prompt: "What is the loop radiation resistance?",
        inputs: [
          { label: "mOhms", type: "number", tolerance: 0.05 }
        ],
        versions: {
          a: [99.806],
          b: [23.996],
          c: [32.193],
          d: [26.911],
          e: [97.294]
        }
      },
      III: {
        prompt: "What is the loop loss resistance?",
        inputs: [
          { label: "mOhms", type: "number", tolerance: 0.05 }
        ],
        versions: {
          a: [1265.518],
          b: [97.515],
          c: [1866.258],
          d: [1241.23],
          e: [299.825]
        }
        
      },
      IV: {
        prompt: "What is efficiency?",
        inputs: [
          { label: "%", type: "number", tolerance: 0.05 }
        ],
        versions: {
          a: [7.31],
          b: [19.748],
          c: [1.696],
          d: [2.122],
          e: [24.5]
        }
        
      },
      V: {
        prompt: "What is the current?",
        inputs: [
          { label: "%", type: "number", tolerance: 0.05 }
        ],
        versions: {
          a: [8.525],
          b: [4.071],
          c: [3.282],
          d: [5.325],
          e: [2.968]
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
