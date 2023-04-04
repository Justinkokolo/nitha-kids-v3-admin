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
import CategoryForm from './Form';
import CategoriesList from './List';
import { ColumnsWrapper, Column, ColumnsSeparator } from '../../../styles/common.styles';
import Alert from '../Alert';

const size = FontSize.XXXSmall;
const weight = FontWeight.SemiBold;
const color = Color.default;

const Categories = () => {
  const { categories, category } = useAppSelector((state) => state.category);
  const { data, alert } = categories;
  const { type, message } = alert;

  return (
    <Fragment>
      <Alert type={type} text={message} show={!!message} />
      <ColumnsWrapper>
        <Column flex={1.5}>
          <Typography
            text={category ? "EDIT CATEGORY" : "NEW CATEGORY"}
            size={size}
            weight={weight}
            color={color}
          />
          <Space size={Spacing.Small} />
          <CategoryForm />
        </Column>
        <ColumnsSeparator size={Spacing.Large}/>
        <Column flex={3}>
          <Typography
            text="LIST OF CATEGORIES"
            size={size}
            weight={weight}
            color={color}
          />
          <Space size={Spacing.Small} />
          <CategoriesList data={data} />
        </Column>
      </ColumnsWrapper>
    </Fragment>
  );
};

export default Categories;
