/* eslint-disable react/prop-types */
function Entry({ uniqueKey, payload, onClick: onClickCb }) {
  const { type } = payload.action;
  return <button onClick={() => onClickCb(uniqueKey)}>Action - {type}</button>;
}

export default Entry;
