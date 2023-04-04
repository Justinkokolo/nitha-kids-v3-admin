// Libs
import { h } from 'preact';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

// Utils
import { Color } from '../../constants/colors';
import { FontSize } from '../../constants/fonts';
import { Type } from '../../constants/size';

// Components
import { ChevronDown, ChevronUp } from 'react-feather';
import { IconWrapper, InnerWrapper, Wrapper } from './Dropdown.styles';
import Typography from '../Typography';
import SelectList from '../SelectList';

interface IProps {
  placeholder: string;
  value: { value: number | string; text: string} | null;
  list: {
    value: string | number;
    text: string
  }[];
  size?: Type;
  withMargin?: boolean;
  onChange: (text: { value: string | number; text: string }) => void;
};

const iconSize = 22;
const Dropdown = ({
  placeholder,
  value,
  list,
  size = Type.Small,
  withMargin = false,
  onChange
} : IProps) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(value || { value: '', text: ''});
  const { text } = selection;
  return (
    <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
      <Wrapper size={size} withMargin={withMargin} onClick={() => setOpen(true)}>
        <InnerWrapper>
          <Typography
            text={text || placeholder}
            size={FontSize.Small}
            color={text ? Color.default : Color.darkGray}
          />
        </InnerWrapper>
        <IconWrapper>
          {open ?
            <ChevronUp size={iconSize} color={Color.darkGray} /> :
            <ChevronDown size={iconSize} color={Color.darkGray} />
          }
        </IconWrapper>
        {open && (
          <SelectList
            selectedItem={selection}
            list={list}
            onSelect={val => {
              setSelection(val);
              onChange(val);
              setOpen(false);
            }}
          />
        )}
      </Wrapper>
    </OutsideClickHandler>
  );
};

export default Dropdown;