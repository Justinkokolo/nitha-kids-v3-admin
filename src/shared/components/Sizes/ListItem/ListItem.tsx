// Libs
import { h } from 'preact';
import { useState, useEffect } from 'react';

// Utils
import { Type } from '../../../constants/size';
import { FontSize, FontWeight } from '../../../constants/fonts';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { deleteSize } from '../../../redux/features/size/calls';
import { setSize } from '../../../redux/features/size/slice';

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
    dispatch(deleteSize({ id }));
  };

  useEffect(() => {
    if (status === 'success') {
      setIsDeleting(false);
    }
  }, [status]);

  return (
    <Panel size={Type.Small}>
      <DeletePopUp
        title={`Do you really wanna delete the size '${name}'?`}
        show={isDeleting}
        onCancel={() => setIsDeleting(false)}
        onDelete={onDelete}
        loading={status === 'loading'}
      />
      <ColumnsWrapper>
        <DefaultWrapper flex={3} rightAligned={false} >
          <Typography text={name} size={FontSize.Small} weight={FontWeight.SemiBold} />
        </DefaultWrapper>
        <DefaultWrapper flex={1} rightAligned>
          <Action isDeleteButton={false} rightAligned onClick={() => dispatch(setSize({ id, name }))}>Edit</Action>
          <Action isDeleteButton rightAligned onClick={() => setIsDeleting(true)}>Delete</Action>
        </DefaultWrapper>
      </ColumnsWrapper>
    </Panel>
  );
};

export default ListItem;
