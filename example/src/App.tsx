import React, { VFC } from 'react';
import styled from 'styled-components';

import { Box } from './reactComponentLib';

const StyledDiv = styled.div`
  padding: 10px;
  background-color: blue;
  color: white;
`;

export const App: VFC = () => (
  <div>
    <Box>Blah</Box>
    <StyledDiv>Example App styled component</StyledDiv>
  </div>
);
