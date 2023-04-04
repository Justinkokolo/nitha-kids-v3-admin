// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';

// Utils
import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div`
  width: 330px;
  height: 285px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Color.gray};
  padding: 0 ${Spacing.XLarge};
  border-radius: ${Spacing.Small};
`;

export const DescriptionWrapper = styled.div`
  height: calc(${Spacing.XXLarge} + ${Spacing.Medium});
`;