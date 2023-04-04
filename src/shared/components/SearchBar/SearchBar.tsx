// Libs
import { h } from 'preact';
import { useState } from 'react';

// Utils
import { Type } from '../../constants/size';

// Components
import { Search } from 'react-feather';
import { IconWrapper, Input, Wrapper } from './SearchBar.styles';
import { Color } from '../../constants/colors';

interface IProps {
  size?: Type
}

const SearchBar = ({ size = Type.Large } : IProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <Wrapper size={size} focused={focused}>
      <IconWrapper>
        <Search size={19} color={Color.darkGray} />
      </IconWrapper>
      <Input
        id='searchField'
        onChange={() => {}}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Search"
      />
    </Wrapper>
  );
};

export default SearchBar;
