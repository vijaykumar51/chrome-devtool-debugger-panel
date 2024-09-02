import { JSONTree } from "react-json-tree";
import getItemString from "./getItemString";

const theme = {
  scheme: "nicinabox",
  author: "nicinabox (http://github.com/nicinabox)",
  base00: "#2A2F3A", // Redux devtools uses this background
  base01: "#3C444F",
  base02: "#4F5A65",
  base03: "#BEBEBE",
  base04: "#b0b0b0",
  base05: "#d0d0d0",
  base06: "#FFFFFF",
  base07: "#f5f5f5",
  base08: "#fb9fb1",
  base09: "#FC6D24",
  base0A: "#ddb26f",
  base0B: "#A1C659",
  base0C: "#12cfc0",
  base0D: "#6FB3D2",
  base0E: "#D381C3",
  base0F: "#deaf8f",
};

// eslint-disable-next-line react/prop-types
function JSONViewer({ payload }) {
  return (
    <JSONTree
      hideRoot
      data={payload}
      theme={theme}
      sortObjectKeys
      shouldExpandNodeInitially={(_1, _2, level) => level < 2}
      getItemString={getItemString}
    />
  );
}

export default JSONViewer;
