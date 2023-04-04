// Libs
import { h } from 'preact';
import { useState, useEffect } from 'react';

// Utils
import { Color } from '../../constants/colors';

// Components
import { Label, Wrapper, InnerWrapper, PhoneNumberInput } from './../TextField/TextField.styles';
import Typography from '../Typography';
import CountriesList from '../CountriesList';
import { FontSize } from '../../constants/fonts';

interface IProps {
  id: string;
  label?: string;
  value?: string;
  readOnly?: boolean;
  errorMessage?: string;
  type?: string;
  isTextArea?: boolean;
  placeholder?: string;
  newsletter?: boolean;
  onChange?: (text: string) => void;
  onFocus?: () => void;
  onSubmit?: () => void;
};

const list = [
  { value: '243', text: '+243' },
  { value: '971', text: '+971' }
];

const PhoneNumber = ({
  id,
  label,
  value,
  readOnly = false,
  errorMessage,
  type = 'text',
  placeholder = '',
  newsletter = false,
  onChange,
  onFocus,
  onSubmit,
} : IProps) => {
  const [countryCode, setCountryCode] = useState<string | number>('');
  const [textFieldValue, setTextFieldValue] = useState('');

  const handleChange = (text: string) => {
    setTextFieldValue(text);
    onChange?.(text);
  };

  const handleSubmit = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      onSubmit?.();
    }
  };

  useEffect(() => {
    if (value) {;
      handleChange(value);
    }
  }, [value]);

  return (
    <Wrapper>
      {!!label && <Label htmlFor={id}>{label}</Label>}
      <InnerWrapper>
        <CountriesList list={list} id="countries" onChange={code => setCountryCode(code.value)} />
        <PhoneNumberInput
          id={id}
          defaultValue={type === 'number' ? parseFloat(textFieldValue) : textFieldValue}
          readOnly={readOnly}
          onChange={(e) => handleChange(`${countryCode}${e.target.value}`)}
          withError={!!errorMessage}
          type={type}
          onFocus={() => onFocus?.()}
          placeholder={placeholder}
          onKeyDown={handleSubmit}
          newsletter={newsletter}
          disabled={!countryCode}
        />
      </InnerWrapper>
      {!!errorMessage && <Typography size={FontSize.XSmall} text={errorMessage} color={Color.red} />}
    </Wrapper>
  );
};

export default PhoneNumber;
