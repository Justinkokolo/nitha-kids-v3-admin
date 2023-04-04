// Libs
import { h } from 'preact';

// Utils
import { Color } from '../../constants/colors';
import { FontSize } from '../../constants/fonts';

// Components
import { Text } from './Tag.styles';

interface IProps {
  text: string;
  color?: Color;
  borderColor?: Color;
  backgroundColor?: Color;
  clickable?: boolean;
  onClick?: () => void;
};

const Tag = ({
  text,
  color = Color.default,
  borderColor = Color.border,
  backgroundColor = Color.lightGray,
  clickable = false,
  onClick
} : IProps) => {
  return (
    <Text
      onClick={() => {if (clickable) onClick?.();}}
      size={FontSize.XSmall}
      color={color}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      clickable={clickable}
    >{text}</Text>
  );
};

export default Tag;
