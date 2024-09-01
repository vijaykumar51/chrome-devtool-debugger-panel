import { JSONTree } from "react-json-tree";
import getItemString from "./getItemString";

// eslint-disable-next-line react/prop-types
function JSONViewer({ payload }) {
  return (
    <JSONTree
      hideRoot
      data={payload}
      shouldExpandNodeInitially={(_1, _2, level) => level < 10}
      getItemString={getItemString}
    />
  );
}

export default JSONViewer;
