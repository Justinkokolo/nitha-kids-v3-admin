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
  Image
} from "../../../../styles/common.styles";
import Typography from "./../../../../shared/components/Typography";

interface IProps {
  value: string | number,
  text: string,
  image: string;
  onDelete: (value: string | number) => void;
}

const LinkedProduct = ({ value, text, image, onDelete }: IProps) => {
  return (
    <Panel size={Type.Small}>
      <ColumnsWrapper>
        <DefaultWrapper flex={2} rightAligned={false}>
          <Image src={image} alt={text} />
          <Typography
            text={text}
            size={FontSize.Small}
            weight={FontWeight.SemiBold}
          />
        </DefaultWrapper>
        <DefaultWrapper flex={1} rightAligned>
          <Action
            isDeleteButton
            rightAligned
            onClick={() => onDelete(value)}
          >
            Delete
          </Action>
        </DefaultWrapper>
      </ColumnsWrapper>
    </Panel>
  );
};

export default LinkedProduct;
