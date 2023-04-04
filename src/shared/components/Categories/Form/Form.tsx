// Libs
import { h } from 'preact';
import { useState, useEffect } from 'react';

// Utils
import { Spacing } from '../../../constants/spacing';
import { Type } from '../../../constants/size';
import { capitalizeText } from '../../../helpers/utils';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { addCategory, updateCategory } from '../../../redux/features/category/calls';
import { setCategory } from '../../../redux/features/category/slice';

// Components
import Panel from '../../Panel';
import TextField from '../../TextField';
import Space from '../../Space';
import Button from '../../Button';
import { FlewColumn } from '../../../../styles/common.styles';
import { Color } from '../../../constants/colors';

const Form = () => {
  const dispatch = useAppDispatch();
  const { categories, category } = useAppSelector((state) => state.category);
  const { status } = categories;
  
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = () => {
    setErrorMessage(value ? '' : 'Ce champ est obligatoire');
    if (!value) return;
    dispatch(
      category ? 
      // @ts-ignore
      updateCategory({ id: category.id,name: capitalizeText(value) })
      // @ts-ignore
      : addCategory({ name: capitalizeText(value) })
    );
  };

  useEffect(() => {
    if (status === 'success') {
      setValue('');
    }
  }, [status]);

  useEffect(() => {
    if (category) {
      setValue(category.name);
    }
  }, [category]);

  useEffect(() => {
    if (value === '') {
      dispatch(setCategory(null));
    }
  }, [value]);

  return (
    <Panel size={Type.Medium}>
      <FlewColumn>
        <TextField
          id="category"
          value={value}
          label="Category's name"
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
