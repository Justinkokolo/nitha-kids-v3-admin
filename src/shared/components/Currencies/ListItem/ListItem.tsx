// Libs
import { h } from 'preact';
import { useState, useEffect } from "react";

// Utils
import { Type } from "../../../constants/size";
import { FontSize, FontWeight } from "../../../constants/fonts";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { deleteCurrency } from "../../../redux/features/currency/calls";
import { setCurrency } from "../../../redux/features/currency/slice";

// Components
import Panel from "../../Panel";
import {
  ColumnsWrapper,
  DefaultWrapper,
  Action,
} from "../../../../styles/common.styles";
import Typography from "./../../Typography";
import DeletePopUp from "./../../DeletePopUp";

interface IProps {
  id: number;
  symbol: string;
  name: string;
}

const ListItem = ({ id, name, symbol }: IProps) => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.category.categories);

  const [isDeleting, setIsDeleting] = useState(false);

  const onDelete = () => {
    // @ts-ignore
    dispatch(deleteCurrency({ id }));
  };

  useEffect(() => {
    if (status === "success") {
      setIsDeleting(false);
    }
  }, [status]);

  return (
    <Panel size={Type.Small}>
      <DeletePopUp
        title={`Do you really wanna delete the currency '${name}'?`}
        show={isDeleting}
        onCancel={() => setIsDeleting(false)}
        onDelete={onDelete}
        loading={status === "loading"}
      />
      <ColumnsWrapper>
        <DefaultWrapper flex={2} rightAligned={false}>
          <Typography
            text={name}
            size={FontSize.Small}
            weight={FontWeight.SemiBold}
          />
        </DefaultWrapper>
        <DefaultWrapper flex={1} rightAligned={false}>
          <Typography
            text={symbol}
            size={FontSize.Small}
            weight={FontWeight.SemiBold}
          />
        </DefaultWrapper>
        <DefaultWrapper flex={1} rightAligned>
          <Action
            isDeleteButton={false}
            rightAligned
            onClick={() => dispatch(setCurrency({ id, name, symbol }))}
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
        </DefaultWrapper>
      </ColumnsWrapper>
    </Panel>
  );
};

export default ListItem;
