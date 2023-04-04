// Libs
import { h } from 'preact';

// Utils
import { Color } from '../../constants/colors';
import { FontSize, FontWeight } from '../../constants/fonts';

// Components
import {
  DetailsWrapper,
  DefaultWrapper,
} from './../ProductListItem/ProductListItem.styles';
import {
  Wrapper,
} from './DeliveryListHeader.styles';
import Typography from '../Typography';

const size = FontSize.XXXSmall;
const weight = FontWeight.SemiBold;
const color = Color.default;

const DeliveryListHeader = () => {
  return (
    <Wrapper>
      <DefaultWrapper flex={0.2}>
        <input type="checkbox" id="scales" name="scales" />
      </DefaultWrapper>
      <DetailsWrapper>
        <Typography
          text="NAME"
          size={size}
          weight={weight}
          color={color}
        />
      </DetailsWrapper>
      <DefaultWrapper flex={1.2}>
        <Typography
          text="ADDRESS"
          size={size}
          weight={weight}
          color={color}
        />
      </DefaultWrapper>
      <DefaultWrapper flex={0.7}>
        <Typography
          text="STATUS"
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
          text="DATE"
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
      <DefaultWrapper flex={0.9}>
        <Typography
          text="NAME"
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

export default DeliveryListHeader;
