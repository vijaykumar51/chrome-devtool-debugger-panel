// export const mockData = {
//   action: {
//     instantRender: true,
//     type: "forceUpdate",
//     data: [
//       { a: 1 },
//       { b: 2 },
//       { c: 3 },
//       { a: 1 },
//       { b: 2 },
//       { c: 3 },
//       { a: 1 },
//       { b: 2 },
//       { c: 3 },
//       { a: 1 },
//       { b: 2 },
//       { c: 3 },
//     ],
//     payload: {
//       forceUpdateFeatures: {},
//     },
//   },
// };

// const action = {
//   actionType: "DISPATCH ACTION",
//   actionInfo: "",
//   actionName: "pagination",
//   color: "#342332",
//   origin: console.trace(),
//   details: {
//     payload: {},
//     diff: { before: {}, after: {} },
//     otherTabs: [{ tabType: { payload } }],
//   },
// };

// const action = {
//   actionType: "DISPATCH ACTION",
//   actionInfo: "Action dispatched to the queue",
//   actionName: "forceUpdate",
//   color: "#342332",
//   details: {
//     payload: {
//       action: {
//         instantRender: true,
//         type: "forceUpdate",
//         data: [{ a: 1 }, { b: 2 }],
//         payload: {
//           forceUpdateFeatures: {},
//         },
//       },
//     },
//   },
// };

const getAction = (actionType, actionName, color, indentLevel) => ({
  actionType,
  actionInfo: "Action dispatched to the queue",
  actionName,
  color,
  indentLevel,
  details: {
    payload: {
      action: {
        instantRender: true,
        type: "forceUpdate",
        data: [{ a: 1 }, { b: 2 }],
        payload: {
          forceUpdateFeatures: {},
        },
      },
    },
  },
});

// TODO: check to have another prop "isStandalone" to see if the property is standalone or not. If not, then dispatch another event of same type with "close event"

const action1 = getAction("DISPATCH ACTION", "pagination", "#d7658b", 1);
const action2 = getAction("DISPATCH ACTION", "bootstrap", "#d7658b", 1);
const action3 = getAction(
  "DISPATCH ACTION",
  "updateStateVersion",
  "#d7658b",
  1
);
const action4 = getAction("DISPATCH ACTION", "forceUpdate", "#d7658b", 1);

const action5 = getAction("EXECUTING ACTION", "pagination", "#76c68f", 1);

const action6 = getAction("REDUCED STATE", "", "#54bebe", 2);
const action7 = getAction("EXECUTING FEATURES", "", "#54bebe", 2);

const action8 = getAction("EXECUTING FEATURE", "personalization", "#e76157", 3);
const action9 = getAction("EXECUTING FEATURE", "filter", "#e76157", 3);
const action10 = getAction("EXECUTING FEATURE", "grouping", "#e76157", 3);

const action11 = getAction("EXECUTING ACTION", "bootstrap", "#76c68f", 1);

const action12 = getAction("REDUCED STATE", "", "#54bebe", 2);
const action13 = getAction("EXECUTING FEATURES", "", "#54bebe", 2);

const action14 = getAction(
  "EXECUTING FEATURE",
  "personalization",
  "#e76157",
  3
);

export const mockData = {
  events: [
    { id: "1", eventDetails: action1 },
    { id: "2", eventDetails: action2 },
    { id: "3", eventDetails: action3 },
    { id: "4", eventDetails: action4 },
    { id: "5", eventDetails: action5 },
    { id: "6", eventDetails: action6 },
    { id: "7", eventDetails: action7 },
    { id: "8", eventDetails: action8 },
    { id: "9", eventDetails: action9 },
    { id: "10", eventDetails: action10 },
    { id: "11", eventDetails: action11 },
    { id: "12", eventDetails: action12 },
    { id: "13", eventDetails: action13 },
    { id: "14", eventDetails: action14 },
  ],
};
