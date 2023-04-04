// Libs
import { h, Fragment} from 'preact';

// Utils
import { Spacing } from "../../constants/spacing";
import { FontSize, FontWeight } from "../../constants/fonts";
import { Color } from "../../constants/colors";
import { useAppSelector } from "../../redux/hooks";

// Components
import Typography from "../Typography";
import Space from "../Space";
import GendersForm from "./Form";
import GendersList from "./List";
import {
  ColumnsWrapper,
  Column,
  ColumnsSeparator,
} from "../../../styles/common.styles";
import Alert from "../Alert";

const size = FontSize.XXXSmall;
const weight = FontWeight.SemiBold;
const color = Color.default;

const Genders = () => {
  const { genders, gender } = useAppSelector((state) => state.gender);
  const { data, alert } = genders;
  const { type, message } = alert;

  return (
    <Fragment>
      <Alert type={type} text={message} show={!!message} />
      <ColumnsWrapper>
        <Column flex={1.5}>
          <Typography
            text={gender ? "EDIT GENDER" : "NEW GENDER"}
            size={size}
            weight={weight}
            color={color}
          />
          <Space size={Spacing.Small} />
          <GendersForm />
        </Column>
        <ColumnsSeparator size={Spacing.Large}/>
        <Column flex={3}>
          <Typography
            text="LIST OF GENDERS"
            size={size}
            weight={weight}
            color={color}
          />
          <Space size={Spacing.Small} />
          <GendersList data={data} />
        </Column>
      </ColumnsWrapper>
    </Fragment>
  );
};

export default Genders;
