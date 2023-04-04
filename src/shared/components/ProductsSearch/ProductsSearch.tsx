// Libs
import { h } from 'preact';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

// Utils
import { Color } from '../../constants/colors';

// Components
import TextField from '../TextField';
import SelectList from '../SelectList';
import { ChevronDown, ChevronUp } from 'react-feather';
import { IconWrapper, Wrapper } from './ProductsSearch.styles';

interface IProps {
  id: string;
  label?: string;
  value?: {
    value: string | number;
    text: string,
    image?: string,
    category?: string
  } | undefined;
  disabled?: boolean;
  errorMessage?: string;
  type?: string;
  multiple?: boolean;
  selectionList?: {
    value: string | number;
    text: string,
    image?: string,
    category?: string
  }[];
  list?: {
    value: string | number;
    text: string,
    image?: string,
    category?: string
  }[];
  onChange?: (text: {
    value: string | number;
    text: string,
    image?: string,
    category?: string
  }) => void;
  onMultipleSelection?: (list: {
    value: string | number;
    text: string,
    image?: string,
    category?: string
  }[] | []) => void;
};

const iconSize = 22;

const ProductsSearch = ({
  id,
  label,
  value,
  disabled = false,
  errorMessage,
  type = 'text',
  multiple = false,
  selectionList = [],
  list = [],
  onChange,
  onMultipleSelection,
} : IProps) => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(value);
  const [selections, setSelections] = useState(selectionList);

  return (
    <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
      <Wrapper>
        <TextField
          id={id}
          value={item ? item.text : ''}
          readOnly={true}
          errorMessage={errorMessage}
          type={type}
          label={label}
          onFocus={() => !disabled ? setOpen(true) : undefined}
        />
        <IconWrapper>
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
              if (multiple) {
                let data = selections;
                if (data.includes(val)) {
                  const index = data.indexOf(val);
                  if (index > -1) {
                    data.splice(index, 1);
                  }
                  setSelections(data);
                  if (onMultipleSelection) onMultipleSelection(data);
                } else {
                  data = [...data, val];
                  setSelections(data);
                  if (onMultipleSelection) onMultipleSelection(data);
                }
              } else {
                onChange?.(val);
              }
            }}
            multiple={multiple}
            selections={selections}
          />
        )}
      </Wrapper>
    </OutsideClickHandler>
  );
};

export default ProductsSearch;
