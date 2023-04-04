// Libs
import styled from 'styled-components';

// Utils
import { Color } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';

export const Wrapper = styled.div`
  position: relative;
`;

export const InnerWrapper = styled.div`
  background-color: ${Color.darkGray2};
  padding: calc(${Spacing.XXXLarge} + ${Spacing.Medium});
`;

export const TextWrapper = styled.div`
  width: 728px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TextFieldWrapper = styled.div`
  width: 256px;
  margin-right: ${Spacing.Medium};
`;
