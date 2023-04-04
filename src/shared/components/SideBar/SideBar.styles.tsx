// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  background-color: ${Color.darkestBlue};
  min-width: 256px;
  max-width: 256px;
  margin: 0;
  padding: ${Spacing.Medium} 0;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${Spacing.Large};
`;

export const Logo = styled.img`
  width: 110px;
  height: auto;

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;