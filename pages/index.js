import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Home() {
  const [response, setResponse] = useState(false);

  const checkCapabilities = async () => {
    const { checkScreenSharingCapability } = await import("@opentok/client");
    checkScreenSharingCapability((response) => setResponse(response));
  };

  useEffect(() => {
    checkCapabilities();
  }, []);

  return (
    <Wrapper>
      <h1>
        {!response.supported || response.extensionRegistered === false
          ? "Screen sharing is not supported!"
          : "Screen sharing is supported!"}
      </h1>
      <p>extensionInstalled: {`${response.extentionInstalled}`}</p>
      <p>extensionRegistered: {`${response.extensionRegistered}`}</p>
      <p>extensionRequired: {`${response.extentionRequired}`}</p>
      <p>supported: {`${response.supported}`}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
