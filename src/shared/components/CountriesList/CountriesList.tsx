// Libs
import { h } from 'preact';
import { useState, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

// Utils
import { Color } from '../../constants/colors';

// Components
import TextField from '../TextField';
import SelectList from '../SelectList';
import { ChevronDown, ChevronUp } from 'react-feather';
import { IconWrapper, CountriesListWrapper } from './../SelectField/SelectField.styles';

interface IProps {
  id: string;
  label?: string;
  value?: { value: string | number; text: string } | undefined;
  disabled?: boolean;
  errorMessage?: string;
  type?: string;
  list?: {
    value: string | number;
    text: string
  }[];
  onChange?: (text: { value: string | number; text: string }) => void;
};

const iconSize = 20;

const CountriesList = ({
  id,
  label,
  value = undefined,
  disabled = false,
  errorMessage,
  type = 'text',
  list = [],
  onChange,
} : IProps) => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<{ value: string | number; text: string } | undefined>(undefined);

  useEffect(() => {
    if (value) {
      setItem(value);
    }
  }, [value]);

  const handleFocus = () => {
    if (!disabled) {
      setOpen(true);
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
      <CountriesListWrapper>
        <TextField
          id={id}
          value={item ? item.text : ''}
          readOnly={true}
          errorMessage={errorMessage}
          type={type}
          label={label}
          onFocus={handleFocus}
        />
        <IconWrapper onClick={() => setOpen(true)}>
          {open ?
            <ChevronUp size={iconSize} color={Color.darkGray} /> :
            <ChevronDown size={iconSize} color={Color.darkGray} />
          }
        </IconWrapper>
        {open && (
          <SelectList
            selectedItem={item}
            list={list}
            onSelect={val => {
              setItem(val);
              setOpen(false);
              onChange?.(val);
            }}
            withFlag
          />
        )}
      </CountriesListWrapper>
    </OutsideClickHandler>
  );
};

export default CountriesList;
