// Libs
import { h, Fragment } from 'preact';

// Utils
import { Spacing } from "../../constants/spacing";
import { FontSize, FontWeight } from "../../constants/fonts";
import { Color } from "../../constants/colors";
import { useAppSelector } from "../../redux/hooks";

// Components
import Typography from "../Typography";
import Space from "../Space";
import BrandsForm from "./Form";
import BrandsList from "./List";
import {
  ColumnsWrapper,
  Column,
  ColumnsSeparator,
} from "../../../styles/common.styles";
import Alert from "../Alert";

const size = FontSize.XXXSmall;
const weight = FontWeight.SemiBold;
const color = Color.default;

const Brands = () => {
  const { brands, brand } = useAppSelector((state) => state.brand);
  const { data, alert } = brands;
  const { type, message } = alert;

  return (
    <Fragment>
      <Alert type={type} text={message} show={!!message} />
      <ColumnsWrapper>
        <Column flex={1.5}>
          <Typography
            text={brand ? "EDIT BRAND" : "NEW BRAND"}
            size={size}
            weight={weight}
            color={color}
          />
          <Space size={Spacing.Small} />
          <BrandsForm />
        </Column>
        <ColumnsSeparator size={Spacing.Large}/>
        <Column flex={3}>
          <Typography
            text="LIST OF BRANDS"
            size={size}
            weight={weight}
            color={color}
          />
          <Space size={Spacing.Small} />
          <BrandsList data={data} />
        </Column>
      </ColumnsWrapper>
    </Fragment>
  );
};

export default Brands;
