// Libs
import { h } from 'preact';

// Utils
import { Color } from "../../constants/colors";
import { Type } from "../../constants/size";
import { Spacing } from "../../constants/spacing";

// Components
import { Wraper } from "./Button.styles";
import { ChevronRight } from 'react-feather';

interface IProps {
  text: string;
  color?: Color;
  backgroundColor?: Color;
  disabled?: boolean;
  size?: Type;
  paddingHorizontal?: Spacing;
  withFullWidth?: boolean;
  withBorder?: boolean;
  loading?: boolean;
  withIcon?: boolean;
  newsletter?: boolean;
  onClick: () => void;
}

const Button = ({
  text,
  color = Color.textDark,
  backgroundColor = Color.lightGray,
  disabled = false,
  withBorder = false,
  paddingHorizontal = Spacing.Medium,
  withFullWidth = false,
  size = Type.Medium,
  loading = false,
  withIcon = false,
  newsletter = false,
  onClick,
}: IProps) => {
  const isDisabled = disabled || loading;
  return (
    <Wraper
      onClick={() => !isDisabled ? onClick() : undefined}
      disabled={isDisabled || loading}
      color={color}
      withBorder={withBorder}
      paddingHorizontal={paddingHorizontal}
      withFullWidth={withFullWidth}
      size={size}
      backgroundColor={backgroundColor}
      isLoading={loading}
      withIcon={withIcon}
      newsletter={newsletter}
    >
      {loading ? (<span>Please wait...</span>) : <span>{text}</span>}
      {withIcon && <ChevronRight color={color} size={22} />}
    </Wraper>
  );
};

export default Button;
