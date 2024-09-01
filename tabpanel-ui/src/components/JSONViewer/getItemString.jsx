function getShortType(val, diff) {
  if (diff && Array.isArray(val)) {
    val = val[val.length === 2 ? 1 : 0];
  }

  if (Array.isArray(val)) {
    return val.length > 0 ? "[…]" : "[]";
  } else if (val === null) {
    return "null";
  } else if (val === undefined) {
    return "undef";
  } else if (typeof val === "object") {
    return Object.keys(val).length > 0 ? "{…}" : "{}";
  } else if (typeof val === "function") {
    return "fn";
  } else {
    return val;
  }
}

function getText(type, data, isWideLayout, isDiff) {
  if (type === "Object") {
    const keys = Object.keys(data);
    if (!isWideLayout) return keys.length ? "{…}" : "{}";

    const str = keys
      .slice(0, 1)
      .map((key) => `${key}: ${getShortType(data[key], isDiff)}`)
      .concat(keys.length > 1 ? ["…"] : [])
      .join(", ");

    return `{ ${str} }`;
  } else if (type === "Array") {
    if (!isWideLayout) return data.length ? "[…]" : "[]";

    const str = data
      .slice(0, 4)
      .map((val) => getShortType(val, isDiff))
      .concat(data.length > 4 ? ["…"] : [])
      .join(", ");

    return `[${str}]`;
  } else {
    return type;
  }
}

const getItemString = (type, data, dataTypeKey, isWideLayout, isDiff) => (
  <span>
    {dataTypeKey && data[dataTypeKey] ? `${data[dataTypeKey]} ` : ""}
    {getText(type, data, isWideLayout, isDiff)}
  </span>
);

export default getItemString;
