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
 import CurrencyForm from './Form';
 import CurrencyList from './List';
import { ColumnsWrapper, Column, ColumnsSeparator } from '../../../styles/common.styles';
import Alert from '../Alert';

const fontCurrency = FontSize.XXXSmall;
const weight = FontWeight.SemiBold;
const color = Color.default;

const Currencies = () => {
  const { currencies, currency } = useAppSelector((state) => state.currency);
  const { data, alert } = currencies;

  const { type, message } = alert;

  return (
    <Fragment>
      <Alert type={type} text={message} show={!!message} />
      <ColumnsWrapper>
        <Column flex={1.5}>
          <Typography
            text={currency ? "EDIT CURRENCY" : "NEW CURRENCY"}
            size={fontCurrency}
            weight={weight}
            color={color}
          />
          <Space size={Spacing.Small} />
          <CurrencyForm />
        </Column>
        <ColumnsSeparator size={Spacing.Large} />
        <Column flex={3}>
          <Typography
            text="LIST OF CURRENCIES"
            size={fontCurrency}
            weight={weight}
            color={color}
          />
          <Space size={Spacing.Small} />
          <CurrencyList data={data} />
        </Column>
      </ColumnsWrapper>
    </Fragment>
  );
};

export default Currencies;
