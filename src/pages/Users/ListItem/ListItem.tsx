// Libs
import { Fragment, h } from 'preact';
import { useState, useEffect } from "react";

// Utils
import { Type } from '../../../shared/constants/size';
import { FontSize, FontWeight } from '../../../shared/constants/fonts';
import { useAppSelector, useAppDispatch } from "../../../shared/redux/hooks";
//import { deleteUser } from "../../../shared/redux/features/user/calls";
import { setUser } from '../../../shared/redux/features/user/slice';

// Components
import Panel from "../../../shared/components/Panel";
import {
  ColumnsWrapper,
  DefaultWrapper,
  Action,
} from '../../../styles/common.styles';
import Typography from '../../../shared/components/Typography';
import DeletePopUp from '../../../shared/components/DeletePopUp';
import { IUser } from '../../../types/index';

interface IProps {
  id: number;
  firstname: string;
  lastname: string;
  telephone: string;
  role: string;
}

const ListItem = ({ id, firstname, lastname, telephone, role }: IProps) => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.category.categories);

  const [isDeleting, setIsDeleting] = useState(false);

  const onDelete = () => {
    // @ts-ignore
    // dispatch(deleteUser({ id }));
  };

  useEffect(() => {
    if (status === "success") {
      setIsDeleting(false);
    }
  }, [status]);

  return (
    <Panel size={Type.Small}>
      <DeletePopUp
        title={`Do you really wanna delete user '${firstname}'?`}
        show={isDeleting}
        onCancel={() => setIsDeleting(false)}
        onDelete={onDelete}
        loading={status === "loading"}
      />
      <ColumnsWrapper>
        <DefaultWrapper flex={2} rightAligned={false}>
          <Typography
            text={`${firstname} ${lastname}`}
            size={FontSize.Small}
            weight={FontWeight.SemiBold}
          />
        </DefaultWrapper>
        <DefaultWrapper flex={1} rightAligned={false}>
          <Typography
            text={role}
            size={FontSize.Small}
            weight={FontWeight.SemiBold}
          />
        </DefaultWrapper>
        <DefaultWrapper flex={1} rightAligned>
          <Action
            isDeleteButton={false}
            rightAligned
           // onClick={() => dispatch(setUser({ id, firstname, lastname, telephone, role }))}
          >
            Edit
          </Action>
          <Action
            isDeleteButton
            rightAligned
            onClick={() => setIsDeleting(true)}
          >
            Delete
          </Action>
          {role !== 'Admin' && (
            <Fragment>
              <Action
                isDeleteButton={false}
                rightAligned
                onClick={() => {
                  const user: IUser = {
                    id,
                    firstname,
                    lastname,
                    telephone,
                    role
                  };
                  dispatch(setUser(user));
                }}
              >
                Edit
              </Action>
              <Action
                isDeleteButton
                rightAligned
                onClick={() => setIsDeleting(true)}
              >
                Delete
              </Action>
            </Fragment>
          )}
        </DefaultWrapper>
      </ColumnsWrapper>
    </Panel>
  );
};

export default ListItem;
