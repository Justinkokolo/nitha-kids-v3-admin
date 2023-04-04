// Libs
import { useState } from 'react';
import { h } from 'preact';

// Utils
import { Check } from 'react-feather';
import { Color } from '../../constants/colors';

// Components
import { Wrapper } from "./CheckBox.styles";

const CheckBox = () => {
  const [selected, setSelected] = useState(false);
  return (
    <Wrapper selected={selected} onClick={() => setSelected(!selected)}>
      {selected && <Check size={12} color={Color.white}/>}
    </Wrapper>
  );
};

export default CheckBox;
