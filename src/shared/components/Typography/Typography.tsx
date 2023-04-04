// Libs
import { h } from 'preact';
import React from 'react';

// Utils
import { Color } from '../../constants/colors';
import { FontSize, FontWeight } from '../../constants/fonts';
import { Spacing } from '../../constants/spacing';

// Components
import { Paragraph, SmallText, Badge, InneText, Wrapper, CheckBoxWrapper, Suffix } from './Typography.styles';
import CheckBox from '../CheckBox';

interface IProps {
  text: string;
  size?: FontSize;
  weight?: FontWeight; 
  color?: Color;
  link?: React.ReactNode;
  paddingHorizontal?: Spacing;
  centered?: boolean;
  withLetterSpacing?: boolean;
  clickable?: boolean;
  opacity?: number;
  italic?: boolean;
  smallText?: string;
  bagde?: string;
  withCheckbox?: boolean;
  largeBadge?: number;
  withCopyRight?: boolean;
  suffix?: string;
  suffixColor?: Color;
  suffixClickable?: boolean;
  onClick?: () => void;
};

const Typography = ({
  text,
  size = FontSize.Medium,
  weight = FontWeight.Regular,
  color = Color.default,
  link,
  paddingHorizontal = Spacing.NoSpace,
  centered =  false,
  withLetterSpacing = false,
  opacity = 1,
  clickable = false,
  italic = false,
  smallText = '',
  onClick,
  bagde,
  withCheckbox,
  largeBadge,
  withCopyRight,
  suffix,
  suffixColor = Color.green,
  suffixClickable = false
} : IProps) => {
  return (
    <Wrapper clickable={clickable}>
      <Paragraph
        color={color}
        opacity={opacity}
        italic={italic}
        size={size}
        weight={weight}
        paddingHorizontal={paddingHorizontal}
        centered={centered}
        withLetterSpacing={withLetterSpacing}
        onClick={() => onClick?.()}
      >
        <InneText>
          {withCopyRight && <span>&#169;&nbsp;</span>}
          {!!smallText && <SmallText>{smallText}</SmallText>}
          {text}{link}
          {!!bagde && <Badge large={false}>{bagde}</Badge>}
          {!!largeBadge && <Badge large>{largeBadge}</Badge>}
          {!!suffix && <Suffix color={suffixColor} clickable={suffixClickable}>{suffix}</Suffix>}
        </InneText>
      </Paragraph>
      {withCheckbox && (
        <CheckBoxWrapper>
          <CheckBox />
        </CheckBoxWrapper>
      )}
    </Wrapper>
  );
};

export default Typography;
