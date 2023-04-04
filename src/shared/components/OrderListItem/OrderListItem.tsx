// Libs
import { Fragment, h } from 'preact';

// Utils
import { Color } from '../../constants/colors';
import { FontSize, FontWeight } from '../../constants/fonts';
import { Spacing } from '../../constants/spacing';
import { shortenText } from '../../helpers/utils';

// Components
import {
  DetailsWrapper,
  DetailsInnerWrapper,
  Wrapper,
  DefaultWrapper,
  ColorItem,
  ColorsWrapper
} from './OrderListItem.styles';
import { Action } from './../../../styles/common.styles';
import Typography from '../Typography';
import Space from '../Space/Space';
// import Tag from '../Tag';
import More from '../More';

interface IProps {
  id?: string | number; 
  name: string;
  status?: string;
  description?: string;
  price: number;
  date: string;
  quantity: number;
  reference: string;
  address: string;
}

const actions = ['Edit', 'Delete'];

const OrderListItem = ({
  name,
  description,
  price,
  date,
  quantity,
  reference,
  address
} : IProps) => {
  return (
    <Wrapper>
      <DefaultWrapper flex={0.2}>
        <input type="checkbox" id="scales" name="scales" />
      </DefaultWrapper>
      <DetailsWrapper>
        <DetailsInnerWrapper>
          <Typography
            text={name}
            size={FontSize.Medium}
            weight={FontWeight.SemiBold}
            color={Color.textDark}
          />
          {!!description && (
            <Fragment>
              <Space size={Spacing.XSmall} />
              <Typography
                text={shortenText(description, 36)}
                size={FontSize.XSmall}
                color={Color.default}
              />
            </Fragment>
          )}
          
        </DetailsInnerWrapper>
      </DetailsWrapper>
      <DefaultWrapper flex={0.7}>
        <Typography
          text={address}
          size={FontSize.Small}
          weight={FontWeight.SemiBold}
          color={Color.textDark}
        />
      </DefaultWrapper>
      <DefaultWrapper flex={1.2}>
        <div>
        
        </div>
      </DefaultWrapper>
      <DefaultWrapper flex={0.7}>
        <ColorsWrapper>
          <ColorItem color="#089987"/>
          <ColorItem color="#145dfe" />
          <ColorItem color="#a81212" />
        </ColorsWrapper>
      </DefaultWrapper>
      <DefaultWrapper flex={0.7}>
        <Typography
          text={`${price}`}
          size={FontSize.Small}
          weight={FontWeight.SemiBold}
          color={Color.textDark}
        />
      </DefaultWrapper>
      <DefaultWrapper flex={0.7}>
        <Typography
          text={date}
          size={FontSize.Small}
          weight={FontWeight.SemiBold}
          color={Color.textDark}
        />
      </DefaultWrapper>
      <DefaultWrapper flex={0.7}>
        <Typography
          text={`${quantity}`}
          size={FontSize.Small}
          weight={FontWeight.SemiBold}
          color={Color.textDark}
        />
      </DefaultWrapper>
      <DefaultWrapper flex={0.7}>
        <Typography
          text={reference}
          size={FontSize.Small}
          weight={FontWeight.SemiBold}
          color={Color.textDark}
        />
      </DefaultWrapper>
      <DefaultWrapper flex={0.9}>
        {/* <Typography
          text={reference}
          size={FontSize.Small}
          weight={FontWeight.SemiBold}
          color={Color.textDark}
        /> */}
      </DefaultWrapper>
      <DefaultWrapper flex={0.7}>
        <Action isDeleteButton={false} rightAligned={false}>View</Action>
        <More
          onSelect={item => console.log('item', item)}
          list={actions}
        />
      </DefaultWrapper>
    </Wrapper>
  );
};

export default OrderListItem;
