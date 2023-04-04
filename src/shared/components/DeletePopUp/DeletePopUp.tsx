// Libs
import { h, Fragment } from 'preact';

// Utils
import { Color } from '../../constants/colors';
import { FontSize } from '../../constants/fonts';

// Components
import { Button, ButtonsContainer, Content, PopUp, Wrapper } from './DeletePopUp.styles';
import Typography from '../Typography';
import Space from '../Space';

interface IProps {
  title: string;
  show?: boolean;
  loading?: boolean;
  onDelete: () => void;
  onCancel: () => void;
};

const DeletePopUp = ({
  title,
  show = false,
  onDelete,
  onCancel,
  loading = false,
} : IProps) => {
  return (
    <Fragment>
      {show && (
        <Wrapper>
          <PopUp>
            <Content>
              <Typography
                text="DELETION"
                size={FontSize.XXSmall}
                color={Color.darkGray}
              />
              <Space />
              <Typography
                text={title}
                size={FontSize.Medium}
              />
            </Content>
            <ButtonsContainer>
              <Button
                backgroundColor={Color.gray}
                onClick={onCancel}
                isLoading={false}
                color={Color.default}
              >Cancel</Button>
              <Button
                backgroundColor={Color.red}
                color={Color.white}
                onClick={() => !loading ? onDelete() : undefined}
                isLoading={loading}
              >{loading ? (<span>Please wait...</span>) : <span>Delete</span>}</Button>
            </ButtonsContainer>
          </PopUp>
        </Wrapper>
      )}
    </Fragment>
  );
};

export default DeletePopUp;