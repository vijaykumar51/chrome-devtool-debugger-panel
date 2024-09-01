/* eslint-disable react/prop-types */
import JSONViewer from "../JSONViewer/JSONViewer";
import { styled } from "styled-components";

const StyledActionDetails = styled.div`
  padding: 10px;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;

  #jsonViewerContainer {
    background-color: #2a2f3a;
    padding: 10px;
  }
`;

function ActionDetails({ payload }) {
  return (
    <StyledActionDetails>
      <h2>Details</h2>
      <div id="jsonViewerContainer">
        <JSONViewer payload={payload} />
      </div>
    </StyledActionDetails>
  );
}

export default ActionDetails;
