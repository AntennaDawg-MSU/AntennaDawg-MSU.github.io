window.homeworkGuides = window.homeworkGuides || {};

window.homeworkGuides[1] = {
  title: "Homework 1",
  questions: {
    1: {
      I: {
        prompt: "List all TE/TM modes and frequency at the lowest cutoff.",
        inputs: [
          { label: "Cutoff frequency (MHz) (If not applicable, put 0)", type: "number", tolerance: 0.05 },
          { label: "Modes at this cutoff (If not applicable put 'NA')",     type: "list" }
        ],
        versions: {
          a: [749.6585, ['TE10']],
          b: [160.002, ['TE10']],
          c: [473.2935, ['TE10']],
          d: [374.7895, ['TE10']],
          e: [467.397, ['TE10']]
        }
      },
      II:{
        prompt: "List all TE/TM modes and frequency at the second lowest cutoff.",
        inputs: [
          { label: "Cutoff frequency (MHz) (If not applicable, put 0)", type: "number", tolerance: 0.05 },
          { label: "Modes at this cutoff (If not applicable put 'NA')",     type: "list" }
        ],
        versions: {
          a: [1499, ['TE20', 'TE01']],
          b: [320.0045, ['TE20']],
          c: [946.5865, ['TE20']],
          d: [749.6585, ['TE20', 'TE01']],
          e: [817.9445, ['TE01']]

        }
      },
      III:{
        prompt: "List all TE/TM modes and frequency at the third lowest cutoff.",
        inputs: [
          { label: "Cutoff frequency (MHz) (If not applicable, put 0)", type: "number", tolerance: 0.05 },
          { label: "Modes at this cutoff (If not applicable put 'NA)'",     type: "list" }
        ],
        versions: {
          a: [1676, ['TE11', 'TM11']],
          b: [448.0065, ['TE01']],
          c: [1325, ['TE01']],
          d: [838.1435, ['TE11', 'TM11']],
          e: [934.7935, ['TE20']]

        }
      },
      IV:{
        prompt: "List all TE/TM modes and frequency at the fourth lowest cutoff.",
        inputs: [
          { label: "Cutoff frequency (MHz) (If not applicable, put 0)", type: "number", tolerance: 0.05 },
          { label: "Modes at this cutoff (If not applicable put 'NA')",     type: "list" }
        ],
        versions: {
          a: [0, ['NA']],
          b: [475.721, ['TE11', 'TM11']],
          c: [1407.5, ['TE11', 'TM11']],
          d: [0, ['NA']],
          e: [942.0685, ['TE11', 'TM11']]

        }
      },
      V:{
        prompt: "List all TE/TM modes and frequency at the fifth lowest cutoff.",
        inputs: [
          { label: "Cutoff frequency (MHz) (If not applicable, put 0)", type: "number", tolerance: 0.05 },
          { label: "Modes at this cutoff (If not applicable put 'NA')",     type: "list" }
        ],
        versions: {
          a: [0, ['NA']],
          b: [0, ['NA']],
          c: [1420, ['TE30']],
          d: [0, ['NA']],
          e: [0, ['NA']]

        }
      },



    },
  
    2:{
      I:{
        prompt: "Enter the dimensions a and b.",
        inputs: [
          {label: "Dimension a (mm)", type: "number", tolerance:0.05},
          {label: "Dimension b (mm)", type: "number", tolerance: 0.05}
        ],
        versions:{
          a: [1022.99, 167.43],
          b: [924.236, 418.221],
          c: [708.486, 100.352],
          d: [1136.756, 236.321],
          e: [325.146, 35.519]
        }
      },
      II:{
        prompt: "Enter the group velocity.",
        inputs: [{label: "Velocity ug (x10^6 m/s)", type: "number", tolerance:0.05}],
        versions:{
          a:[94.844],
          b:[68.740],
          c:[83.231],
          d:[37.863],
          e:[61.760]
        },
      },
      III:{
        prompt: "Enter the attenuation constant due to conductor losses.",
        inputs: [{label: "alpha_c (x10^-3 Np/m)", type: "number", tolerance:0.05}],
        versions:{
          a:[0.078],
          b:[0.088],
          c:[0.253],
          d:[0.027],
          e:[1.588]
        },
      },
      IV:{
        prompt: "Enter the attenuation constant due to dielectric losses.",
        inputs: [{label: "alpha_d (x10^-3 Np/m)", type: "number", tolerance:0.05}],
        versions:{
          a:[460.303],
          b:[119.953],
          c:[83.924],
          d:[39.791],
          e:[196.509]
        },
      },
      V:{
        prompt: "Enter the attenuation rate.",
        inputs: [{label: "attenuation rate (dB/m)", type: "number", tolerance:0.05}],
        versions:{
          a:[3.999],
          b:[1.043],
          c:[0.731],
          d:[0.346],
          e:[1.721]
        },
      },
    },
    3:{
      Ia:{
        prompt: "Enter the lowest cutoff frequency and the mode.",
        inputs: [ {label:"frequency in (MHz)", type: "number", tolerance:0.05},
                  {label:"Modes at this cutoff (If not applicable put 'NA')",     type: "list" }],
        versions:{
          a: [827.44, ['TE11']],
          b: [3858.104, ['TE11']],
          c: [528.479, ['TE11']],
          d: [741.16, ['TE11']],
          e: [4898.892, ['TE11']]
        },          
      },
      Ib:{
        prompt: "Enter the second lowest cutoff frequency and the mode.",
        inputs: [ {label:"frequency in (MHz)", type: "number", tolerance:0.05},
                  {label:"Modes at this cutoff (If not applicable put 'NA')",     type: "list" }],
        versions:{
          a: [1080.768, ['TM01']],
          b: [5039.297, ['TM01']],
          c: [690.278, ['TM01']],
          d: [968.073, ['TM01']],
          e: [6398.732, ['TM01']]
        },          
      },
      Ic:{
        prompt: "Enter the third lowest cutoff frequency and the mode.",
        inputs: [ {label:"frequency in (MHz)", type: "number", tolerance:0.05},
                  {label:"Modes at this cutoff (If not applicable put 'NA')",     type: "list" }],
        versions:{
          a: [1372.565, ['TE21']],
          b: [6399.859, ['TE21']],
          c: [876.646, ['TE21']],
          d: [1229.443, ['TE21']],
          e: [8126.329, ['TE21']]
        },          
      },
      II:{
        prompt: "Enter the attenuation rate.",
        inputs: [{label:"Attenuation Rate (dB/m)", type: "number", tolerance:0.05}],
        versions:{
          a: 0.196,
          b: 2.101,
          c: 0.155,
          d: 0.271,
          e: 1.494

        },
      },
      III:{
        prompt: "Enter the relative permittivity",
        inputs: [{label:"er", type: "number", tolerance:0.05}],
        versions:{
          a: 49.971,
          b: 56.048,
          c: 9.44,
          d: 6.458,
          e: 2.57
        },
      },
    },
  },
};
