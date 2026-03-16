// homework3/guide.js
const homeworkGuides = window.homeworkGuides || {};

homeworkGuides[3] = {
  title: "Homework 3",
  questions: {
    1: {
      a: {
        prompt: "Enter the electric field magnitude E (V/m) and its direction angle θ (degrees).",
        inputs: [
          { label: "E (V/m)",      type: "number", tolerance: 0.02 },
          { label: "θ (degrees)",  type: "number", tolerance: 0.01 }
        ],
        versions: {
          1: [120.5, 45],
          2: [98.3,  60],
          3: [145.0, 30],
          4: [110.2, 90]
        }
      },
      b: {
        prompt: "Enter the magnetic flux density B (T).",
        inputs: [
          { label: "B (T)", type: "number", tolerance: 0.02 }
        ],
        versions: {
          1: [0.034],
          2: [0.021],
          3: [0.048],
          4: [0.015]
        }
      },
      c: {
        prompt: "What type of field is produced by a static electric charge? (e.g. 'electric', 'magnetic', 'gravitational')",
        inputs: [
          { label: "Field type", type: "text" }
        ],
        versions: {
          1: ["electric"],
          2: ["electric"],
          3: ["electric"],
          4: ["electric"]
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
