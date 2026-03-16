// homework3/guide.js
wildonw.HomeworkGuides = window.homeworkGuides || {};

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
      a: {
        prompt: "Enter the capacitance C (pF) and voltage V (V).",
        inputs: [
          { label: "C (pF)", type: "number", tolerance: 0.02 },
          { label: "V (V)",  type: "number", tolerance: 0.02 }
        ],
        versions: {
          1: [47.0, 12.0],
          2: [33.0,  9.0],
          3: [56.0, 15.0],
          4: [22.0, 18.0]
        }
      }
    }
  }
};
