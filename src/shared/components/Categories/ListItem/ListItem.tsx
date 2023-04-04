// Libs
import { h } from 'preact';
import { useState, useEffect } from 'react';

// Utils
import { Type } from '../../../constants/size';
import { FontSize, FontWeight } from '../../../constants/fonts';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { deleteCategory } from '../../../redux/features/category/calls';
import { setCategory } from '../../../redux/features/category/slice';

// Components
import Panel from '../../Panel';
import { ColumnsWrapper, DefaultWrapper, Action } from '../../../../styles/common.styles';
import Typography from './../../Typography';
import DeletePopUp from './../../DeletePopUp';

interface IProps {
  id: number;
  name: string;
}

const ListItem = ({ id, name } : IProps) => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.category.categories);

  const [isDeleting, setIsDeleting] = useState(false);

  const onDelete = () => {
    // @ts-ignore
    dispatch(deleteCategory({ id }));
  };

  useEffect(() => {
    if (status === 'success') {
      setIsDeleting(false);
    }
  }, [status]);

  return (
    <Panel size={Type.Small}>
      <DeletePopUp
        title={`Do you really wanna delete the category '${name}'?`}
        show={isDeleting}
        onCancel={() => setIsDeleting(false)}
        onDelete={onDelete}
        loading={status === 'loading'}
      />
      <ColumnsWrapper>
        <DefaultWrapper flex={3} rightAligned={false}>
          <Typography text={name} size={FontSize.Small} weight={FontWeight.SemiBold} />
        </DefaultWrapper>
        <DefaultWrapper flex={1} rightAligned>
          <Action isDeleteButton={false} rightAligned onClick={() => dispatch(setCategory({ id, name }))}>Edit</Action>
          <Action isDeleteButton rightAligned onClick={() => setIsDeleting(true)}>Delete</Action>
        </DefaultWrapper>
      </ColumnsWrapper>
    </Panel>
  );
};

export default ListItem;
