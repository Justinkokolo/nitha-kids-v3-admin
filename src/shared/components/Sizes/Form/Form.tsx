// Libs
import { h } from 'preact';
import { useState, useEffect } from 'react';

// Utils
import { Spacing } from '../../../constants/spacing';
import { Type } from '../../../constants/size';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { addSize, updateSize } from '../../../redux/features/size/calls';
import { setSize } from '../../../redux/features/size/slice';

// Components
import Panel from '../../Panel';
import TextField from '../../TextField';
import Space from '../../Space';
import Button from '../../Button';
import { FlewColumn } from '../../../../styles/common.styles';
import { Color } from '../../../constants/colors';

const Form = () => {
  const dispatch = useAppDispatch();
  const { sizes, size } = useAppSelector((state) => state.size);
  const { status } = sizes;
  
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = () => {
    setErrorMessage(value ? '' : 'Ce champ est obligatoire');
    if (!value) return;
    dispatch(
      size ? 
      // @ts-ignore
      updateSize({ id: size.id,name: value })
      // @ts-ignore
      : addSize({ name: value })
    );
  };

  useEffect(() => {
    if (status === 'success') {
      setValue('');
    }
  }, [status]);

  useEffect(() => {
    if (size) {
      setValue(size.name);
    }
  }, [size]);

  useEffect(() => {
    if (value === '') {
      dispatch(setSize(null));
    }
  }, [value]);

  return (
    <Panel size={Type.Medium}>
      <FlewColumn>
        <TextField
          id="size"
          value={value}
          label="Size's name"
          onChange={(text) => setValue(text)}
          errorMessage={value ? '' : errorMessage}
          onSubmit={() => onSubmit()}
        />
        <Space size={Spacing.Medium} />
        <Button
          text="Save"
          onClick={onSubmit}
          size={Type.Large}
          color={Color.white}
          backgroundColor={Color.textDark}
          loading={status === 'loading'}
        />
      </FlewColumn>
    </Panel>
  );
};

export default Form;
