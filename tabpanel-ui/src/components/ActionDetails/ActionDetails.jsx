/* eslint-disable react/prop-types */
import JSONViewer from "../JSONViewer/JSONViewer";
import { styled } from "styled-components";

const StyledActionDetails = styled.div`
  padding: 10px;
  height: 100%;
  overflow: auto;
`;

function ActionDetails({ payload }) {
  return (
    <StyledActionDetails>
      <h2>Details</h2>
      <JSONViewer payload={payload} />
    </StyledActionDetails>
  );
}

export default ActionDetails;
