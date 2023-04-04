// Libs
import { h } from 'preact';
import { useState, useEffect } from 'react';

// Utils
import { Color } from '../../constants/colors';

// Components
import { Input, Label, TextArea, Wrapper } from './TextField.styles';
import Typography from '../Typography';
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

const TextField = ({
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
  isTextArea = false,
} : IProps) => {
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
      {!isTextArea && (
        <Input
          id={id}
          defaultValue={type === 'number' ? parseFloat(textFieldValue) : textFieldValue}
          readOnly={readOnly}
          onChange={(e) => handleChange(e.target.value)}
          withError={!!errorMessage}
          type={type}
          onFocus={() => onFocus?.()}
          placeholder={placeholder}
          onKeyDown={handleSubmit}
          newsletter={newsletter}
        />
      )}
      {isTextArea && (
        <TextArea
          id={id}
          value={textFieldValue}
          readOnly={readOnly}
          onChange={(e) => handleChange(e.target.value)}
          withError={!!errorMessage}
          onFocus={() => onFocus?.()}
          onKeyDown={handleSubmit}
        />
      )}
      {!!errorMessage && <Typography size={FontSize.XSmall} text={errorMessage} color={Color.red} />}
    </Wrapper>
  );
};

export default TextField;
