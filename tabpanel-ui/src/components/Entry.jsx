/* eslint-disable react/prop-types */
function Entry({ uniqueKey, eventDetails, onClick: onClickCb }) {
  // console.log(eventDetails);
  const { actionType, actionName } = eventDetails;
  return (
    <button
      onClick={() => onClickCb(uniqueKey)}
      style={{ backgroundColor: eventDetails.color }}
    >
      {actionType} {actionName ? `: ${actionName}` : ""}
    </button>
  );
}

export default Entry;
