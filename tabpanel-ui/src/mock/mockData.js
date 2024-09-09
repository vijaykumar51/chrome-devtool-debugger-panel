/* eslint-disable no-undef */

const isWebApp = !chrome.runtime;

const getAction = (
  id,
  actionType,
  actionName,
  color,
  indentLevel,
  isNestedLogStart = false,
  isNestedLogEnd = false
) => ({
  id,
  actionType,
  actionInfo: "Action dispatched to the queue",
  actionName,
  color,
  indentLevel,
  isNestedLogStart,
  isNestedLogEnd,
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
// or take prop "willClose" to make sure any new event is nested under current one.

const action1 = getAction(1, "DISPATCH ACTION", "pagination", "#d7658b", 1);
const action2 = getAction(2, "DISPATCH ACTION", "bootstrap", "#d7658b", 1);
const action3 = getAction(
  3,
  "DISPATCH ACTION",
  "updateStateVersion",
  "#d7658b",
  1
);
const action4 = getAction(4, "DISPATCH ACTION", "forceUpdate", "#d7658b", 1);

const action5 = getAction(
  5,
  "EXECUTING ACTION",
  "pagination",
  "#76c68f",
  1,
  true
);

const action6 = getAction(6, "REDUCED STATE", "", "#54bebe", 2);
const action7 = getAction(7, "EXECUTING FEATURES", "", "#54bebe", 2, true);

const action8 = getAction(
  8,
  "EXECUTING FEATURE",
  "personalization",
  "#e76157",
  3
);
const action9 = getAction(9, "EXECUTING FEATURE", "filter", "#e76157", 3);
const action10 = getAction(10, "EXECUTING FEATURE", "grouping", "#e76157", 3);

const action11 = getAction(
  7,
  "EXECUTING FEATURES",
  "",
  "#54bebe",
  2,
  false,
  true
);
const action12 = getAction(
  5,
  "EXECUTING ACTION",
  "pagination",
  "#76c68f",
  1,
  false,
  true
);

const action13 = getAction(
  11,
  "EXECUTING ACTION",
  "bootstrap",
  "#76c68f",
  1,
  true
);

const action14 = getAction(12, "REDUCED STATE", "", "#54bebe", 2);
const action15 = getAction(13, "EXECUTING FEATURES", "", "#54bebe", 2, true);

const action16 = getAction(
  14,
  "EXECUTING FEATURE",
  "personalization",
  "#e76157",
  3
);

const action17 = getAction(
  13,
  "EXECUTING FEATURES",
  "",
  "#54bebe",
  2,
  false,
  true
);
const action18 = getAction(
  11,
  "EXECUTING ACTION",
  "bootstrap",
  "#76c68f",
  1,
  false,
  true
);

export const mockData = {
  events: [
    action1,
    action2,
    action3,
    action4,
    action5,
    action6,
    action7,
    action8,
    action9,
    action10,
    action11,
    action12,
    action13,
    action14,
    action15,
    action16,
    action17,
    action18,
  ],
};

const nestedQueue = [];
const queueBuckedMap = new Map();

const processedEventInfo = [];
const eventDetailMap = new Map();

const initWebAppEventProcessing = () => {
  let currentEventBucket = processedEventInfo;
  mockData.events.forEach((e) => {
    const newEventBucket = handleEvent(e, currentEventBucket);
    if (newEventBucket) {
      currentEventBucket = newEventBucket;
    }
  });
};

const handleEvent = (event, currentEventBucket) => {
  const { isNestedLogStart, isNestedLogEnd, id } = event;
  const isNestedEvent = isNestedLogStart || isNestedLogEnd;

  if (isNestedEvent) {
    if (isNestedLogStart) {
      const nestedEventBucket = [];
      currentEventBucket.push({ ...event, nestedEventBucket });

      nestedQueue.push(id);
      queueBuckedMap.set(id, nestedEventBucket);
      // TODO: check if we should set the value to invlude nestedEventBucket also or not.
      eventDetailMap.set(id, event);
      return nestedEventBucket;
    } else if (isNestedLogEnd) {
      nestedQueue.pop();
      queueBuckedMap.delete(id);

      if (nestedQueue.length > 0) {
        const newBucketId = nestedQueue[nestedQueue.length - 1];
        return queueBuckedMap.get(newBucketId);
      } else {
        return processedEventInfo;
      }
    }
  } else {
    eventDetailMap.set(id, event);
    currentEventBucket.push(event);
  }
};

const initDevToolEventProcessing = () => {
  let currentEventBucket = processedEventInfo;

  return function processEvent(event) {
    const newEventBucket = handleEvent(event, currentEventBucket);
    if (newEventBucket) {
      currentEventBucket = newEventBucket;
    }
    return processedEventInfo;
  };
};

const processEvent = isWebApp
  ? initWebAppEventProcessing()
  : initDevToolEventProcessing();

export { processedEventInfo, eventDetailMap, processEvent };
