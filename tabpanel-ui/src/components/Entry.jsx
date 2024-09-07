/* eslint-disable react/prop-types */
function Entry({ eventDetails, onClick: onClickCb }) {
  // console.log(eventDetails);
  const { actionType, actionName } = eventDetails;
  return (
    <button
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
  );
}

export default Entry;
