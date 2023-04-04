// Libs
import { h } from 'preact';

// Utils
import { Color } from '../../constants/colors';
import { FontSize, FontWeight } from '../../constants/fonts';

// Components
import { DefaultWrapper } from './../ProductListItem/ProductListItem.styles';
import {
  Wrapper,
} from './ProductListHeader.styles';
import Typography from '../Typography';

const size = FontSize.XXXSmall;
const weight = FontWeight.SemiBold;
const color = Color.default;

const ProductListHeader = () => {
  return (
    <Wrapper>
      <DefaultWrapper flex={0.2}>
        <input type="checkbox" id="scales" name="scales" />
      </DefaultWrapper>
      <DefaultWrapper flex={1.8}>
        <Typography
          text="PRODUCT"
          size={size}
          weight={weight}
          color={color}
        />
      </DefaultWrapper>
      <DefaultWrapper flex={1.2}>
        <Typography
          text="GENDER"
          size={size}
          weight={weight}
          color={color}
        />
      </DefaultWrapper>
      <DefaultWrapper flex={0.7}>
        <Typography
          text="COLORS"
          size={size}
          weight={weight}
          color={color}
        />
      </DefaultWrapper>
      <DefaultWrapper flex={0.7}>
        <Typography
          text="PRICE"
          size={size}
          weight={weight}
          color={color}
        />
      </DefaultWrapper>
      <DefaultWrapper flex={0.7}>
        <Typography
          text="BUYING PRICE"
          size={size}
          weight={weight}
          color={color}
        />
      </DefaultWrapper>
      <DefaultWrapper flex={0.7}>
        <Typography
          text="QUANTITY"
          size={size}
          weight={weight}
          color={color}
        />
      </DefaultWrapper>
      <DefaultWrapper flex={0.7}>
        <Typography
          text="REFERENCE"
          size={size}
          weight={weight}
          color={color}
        />
      </DefaultWrapper>
      <DefaultWrapper flex={0.7}>
        <Typography
          text="ACTIONS"
          size={size}
          weight={weight}
          color={color}
        />
      </DefaultWrapper>
    </Wrapper>
  );
};

export default ProductListHeader;
