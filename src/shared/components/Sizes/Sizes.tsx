// Libs
import { h, Fragment } from 'preact';

// Utils
import { Spacing } from '../../constants/spacing';
import { FontSize, FontWeight } from '../../constants/fonts';
import { Color } from '../../constants/colors';
import { useAppSelector } from '../../redux/hooks';

// Components
import Typography from '../Typography';
import Space from '../Space';
import SizeForm from './Form';
import SizesList from './List';
import { ColumnsWrapper, Column, ColumnsSeparator } from '../../../styles/common.styles';
import Alert from '../Alert';

const fontSize = FontSize.XXXSmall;
const weight = FontWeight.SemiBold;
const color = Color.default;

const Sizes = () => {
  const { sizes, size } = useAppSelector((state) => state.size);
  const { data, alert } = sizes;
  const { type, message } = alert;

  return (
    <Fragment>
      <Alert type={type} text={message} show={!!message} />
      <ColumnsWrapper>
        <Column flex={1.5}>
          <Typography
            text={size ? "EDIT SIZE" : "NEW SIZE"}
            size={fontSize}
            weight={weight}
            color={color}
          />
          <Space size={Spacing.Small} />
          <SizeForm />
        </Column>
        <ColumnsSeparator size={Spacing.Large} />
        <Column flex={3}>
          <Typography
            text="LIST OF SIZES"
            size={fontSize}
            weight={weight}
            color={color}
          />
          <Space size={Spacing.Small} />
          <SizesList data={data} />
        </Column>
      </ColumnsWrapper>
    </Fragment>
  );
};

export default Sizes;
