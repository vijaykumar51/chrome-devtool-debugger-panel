# RSCore debugger - responsibilities

- It should be generic. It should not be bound to the terminologies used in RSCore.
- It should display the timline of actions dispatched.
- It should display the following details in **right** side pane
  - payload
  - diff
  - after event state/value
- It should display the following actions in the **left** side pane

  - Each debugging session will be bound with a session id or instance id.
  - Multiple session ids will be displayed as dropdown/tabs.
  - The actions must be dispatched in the context of session id.
  - Multiple **types** of event defined by user can be fired like Dispatch, memo break, feature run, external view dispatch
  - Support horizontal separator to mark start/end of new event cycle
  - Type of events
    - action
    - parent section start
    - parent section end
    - action belonging to a parent
    - notification event(no payload, may be just a description of the event type)
  - Payload of events
    - action => {actionType: 'DISPATCH ACTION', actionInfo: '', actionName: 'pagination', color: '#342332', origin: console.trace(), details: {payload: {}, diff: {before: {}, after: {}}, otherTabs: [{tabType: {payload}}]}}
    - parent section start - If same type parent starts again and previous parent hasn't completed, show that previous loop didn't complete
    - parent section end
    - notification event
  - How events will be displayed
    - color

- Customization of events

  - Show legends to denote the colors (like Dispatch Action, state, feature, memo break)
  - Filter on
    - Type of events like feature run only, reducers
    - name of event like pagination, force update, sort, grouping etc.
    - search in payload E.g. customWidth = 100

- Check how to log generator object updates and columns/rows updating in loop

# Initialization

- How to register the session id?
- How to bind the events to the session id?
- How to pass the session id to all the places in the code? Think of keeping it at a single place.

# Consumer - responsibilities
