/* eslint-disable react/prop-types */
function Entry({ uniqueKey, payload, onClick: onClickCb }) {
  const { actionType, actionName } = payload;
  return (
    <button onClick={() => onClickCb(uniqueKey)}>
      {actionType} {actionName ? `: ${actionName}` : ""}
    </button>
  );
}

export default Entry;
