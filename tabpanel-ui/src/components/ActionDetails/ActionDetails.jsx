/* eslint-disable react/prop-types */
import JSONViewer from "../JSONViewer/JSONViewer";

function ActionDetails({ payload }) {
  return (
    <>
      <h2>Details</h2>
      <JSONViewer payload={payload} />
    </>
  );
}

export default ActionDetails;
