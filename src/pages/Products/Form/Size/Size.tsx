// Libs
import { h } from 'preact';

// Utils
import { Type } from "./../../../../shared/constants/size";
import { FontSize, FontWeight } from "./../../../../shared/constants/fonts";

// Components
import Panel from "./../../../../shared/components/Panel";
import {
  ColumnsWrapper,
  DefaultWrapper,
  Action,
} from "../../../../styles/common.styles";
import Typography from "./../../../../shared/components/Typography";

interface IProps {
  id?: number;
  size: {
    value: number,
    text: string
  };
  quantity: number;
  onDelete: (size: {
    value: number,
    text: string
  }) => void;
}

const Size = ({ size, quantity, onDelete }: IProps) => {
  return (
    <Panel size={Type.Small}>
      <ColumnsWrapper>
        <DefaultWrapper flex={2} rightAligned={false}>
          <Typography
            text={size.text}
            size={FontSize.Small}
            weight={FontWeight.SemiBold}
          />
        </DefaultWrapper>
        <DefaultWrapper flex={1} rightAligned={false}>
          <Typography
            text={quantity.toString()}
            size={FontSize.Small}
            weight={FontWeight.SemiBold}
          />
        </DefaultWrapper>
        <DefaultWrapper flex={1} rightAligned>
          <Action
            isDeleteButton
            rightAligned
            onClick={() => onDelete(size)}
          >
            Delete
          </Action>
        </DefaultWrapper>
      </ColumnsWrapper>
    </Panel>
  );
};

export default Size;
