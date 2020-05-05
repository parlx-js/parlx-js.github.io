import styled from 'styled-components';
import ReactParlx from 'react-parlx';

export const Parallax = styled(ReactParlx)`
  width: 100%;
  height: 100vh;
  backface-visibility: hidden;
  // position: relative;
  overflow: hidden;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
`;
