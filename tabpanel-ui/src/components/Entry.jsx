/* eslint-disable react/prop-types */
function Entry({ uniqueKey, eventDetails, onClick: onClickCb }) {
  // console.log(eventDetails);
  const { actionType, actionName } = eventDetails;
  return (
    <button
      onClick={() => onClickCb(uniqueKey)}
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
