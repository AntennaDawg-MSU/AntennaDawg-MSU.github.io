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
          { label: "mA", type: "number", tolerance: 0.05 }
        ],
        versions: {
          a: [231.061],
          b: [816.252],
          c: [1456.205],
          d: [11.287],
          e: [8.015]
        }
      },
      III: {
        prompt: "What is the amount of power loss?",
        inputs: [
          { label: "micro W", type: "number", tolerance: 0.05 }
        ],
        versions: {
          a: [137.402],
          b: [23513.836],
          c: [44420.573],
          d: [1.213739],
          e: [16.082]
        }
        
      },
      IV: {
        prompt: "What is efficiency?",
        inputs: [
          { label: "%", type: "number", tolerance: 0.05 }
        ],
        versions: {
          a: [99.981],
          b: [99.509],
          c: [97.617],
          d: [100],
          e: [99.9891]
        }
        
      },
      V: {
        prompt: "What is the power density?",
        inputs: [
          { label: "pW/m^2 (p = 10^-12)", type: "number", tolerance: 0.05 }
        ],
        versions: {
          a: [141.577],
          b: [85551.719],
          c: [89.343],
          d: [5.547],
          e: [0.003]
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
