// Libs
import { h } from 'preact';
import { useState, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { FaCaretDown, FaCaretUp, FaFilter } from "react-icons/fa";

// Utils
import { Color } from '../../constants/colors';
import { FontSize } from '../../constants/fonts';

// Components
import SelectList from '../SelectList';
import Typography from '../Typography';
import { Wrapper, IconWrapper, InnerWrapper, FilterWrapper } from './Chooser.styles';

interface IProps {
  placeholder: string;
  list?: {
    value: string | number;
    text: string
  }[];
  value?: { value: string | number; text: string } | undefined;
  withFilter?: boolean;
  onChange?: (text: { value: string | number; text: string }) => void;
};

const Chooser = ({
  placeholder,
  list,
  value,
  withFilter = false,
  onChange,
} : IProps) => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<{ value: string | number; text: string } | undefined>(undefined);

  useEffect(() => {
    if (value) {
      setItem(value);
    }
  }, [value]);

  return (
    <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
      <Wrapper withFilter={withFilter}>
        <InnerWrapper onClick={() => setOpen(true)} withFilter={withFilter}>
          {withFilter && (
            <FilterWrapper>
              <FaFilter
                size={12}
                color={Color.green}
              />
            </FilterWrapper>
          )}
          {!item && (
            <Typography
              text={placeholder}
              size={FontSize.Small}
              color={Color.darkGray}
            />
          )}
          {item && (
            <Typography
              text={item.text}
              size={FontSize.Medium}
              color={Color.darkBlue}
            />
          )}
          <IconWrapper withFilter={withFilter}>
            {open ? (
              <FaCaretUp
                size={16}
                color={Color.darkBlue}
              />
            ) : (
              <FaCaretDown
                size={16}
                color={Color.darkBlue}
              />
            )}
          </IconWrapper>
        </InnerWrapper>
        {open && (
          <SelectList
            selectedItem={item}
            list={list}
            onSelect={val => {
              setItem(val);
              setOpen(false);
              onChange?.(val);
            }}
            isPublic
          />
        )}
      </Wrapper>
    </OutsideClickHandler>
  );
};

export default Chooser;
