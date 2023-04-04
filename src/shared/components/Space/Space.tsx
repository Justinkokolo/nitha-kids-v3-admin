// Libs
import { h } from 'preact';

// Utils
import { Spacing } from '../../constants/spacing';

// Components
import { Wrapper } from './Space.styles';

interface IProps {
  size?: Spacing;
};

const Space = ({
  size = Spacing.Medium,
} : IProps) => {
  return (
    <Wrapper size={size} />
  );
};

export default Space;