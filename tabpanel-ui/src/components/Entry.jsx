/* eslint-disable react/prop-types */
function Entry({ eventDetails, onClick: onClickCb, indentLevel = 0 }) {
  // console.log(eventDetails);

  const { actionType, actionName, nestedEventBucket } = eventDetails;
  return (
    <>
      <span className={`nestedEvent`}>
        {Array.from({ length: indentLevel }).map((_, index) => (
          <div key={index} className="indent-indicator"></div>
        ))}
        <button
          className="event-button"
          onClick={() => onClickCb(eventDetails.id)}
          style={{ backgroundColor: eventDetails.color }}
        >
          {actionType}{" "}
          {actionName ? (
            <span style={{ fontWeight: "bold" }}>{`: ${actionName}`}</span>
          ) : (
            ""
          )}
        </button>
      </span>

      {nestedEventBucket?.length &&
        nestedEventBucket.map((e) => (
          <Entry
            key={e.id}
            eventDetails={e}
            onClick={onClickCb}
            indentLevel={indentLevel + 1}
          />
        ))}
    </>
  );
}

export default Entry;
