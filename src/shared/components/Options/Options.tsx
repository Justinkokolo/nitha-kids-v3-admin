// Libs
import { h, Fragment } from 'preact';

// Utils
import { useAppSelector } from "../../../shared/redux/hooks";
import { Color } from '../../constants/colors';
import { FontSize, FontWeight } from '../../constants/fonts';
import { Spacing } from '../../constants/spacing';
import { getProductsByGroup } from '../../helpers/utils';

// Components
import {
  Wrapper,
} from './Options.styles';
import Typography from '../Typography';
import Space from '../Space';
import FilterPlaceholder from '../Placeholders/Filter';

interface IChildProps {
  item?: { value: number; text: string};
  title: string;
  large?: boolean;
}

const Option = ({ item, title, large = false }: IChildProps) => {
  const { products } = useAppSelector((state) => state.product);
  const { data } = products;
  // @ts-ignore
  const badge = getProductsByGroup(data, title, item?.text);

  return (
    <Fragment>
      <Typography
        text={item ? item.text : ''}
        weight={large ? FontWeight.Bold : FontWeight.Regular}
        size={large ? FontSize.MLarge : FontSize.ExtraMedium}
        clickable
        bagde={badge.toString()}
        withCheckbox={!large}
        color={large ? Color.darkestBlue : Color.default}
      /> 
      <Space size={large ? Spacing.Medium : Spacing.ExtraSmall} />
    </Fragment>
  );
};

interface IProps {
  title: string;
  list?: { value: number; text: string}[];
  ready: boolean;
  large?: boolean;
  onSelect?: (item: { value: number; text: string}) => void;
}

const Options = ({ title, list, ready, large = false }: IProps) => {
  return (
    <Wrapper>
      {!large && (
        <Fragment>
          <Typography
            text={title}
            weight={FontWeight.SemiBold}
            size={FontSize.XSmall}
            color={Color.textLight}
          /> 
          <Space size={Spacing.Medium} /> 
        </Fragment>
      )}
      <FilterPlaceholder ready={ready} />
      <FilterPlaceholder ready={ready} />
      <FilterPlaceholder ready={ready} />
      <FilterPlaceholder ready={ready} />
      {large && (
        <Fragment>
          <FilterPlaceholder ready={ready} />
          <FilterPlaceholder ready={ready} />
          <FilterPlaceholder ready={ready} />
          <FilterPlaceholder ready={ready} />
        </Fragment>
      )}
      {ready && (
        <Fragment>
          {list?.map((item, index) => {
            return <Option item={item} key={index} title={title} large={large} />;
          })}
        </Fragment>
      )}
      
    </Wrapper>
  );
};

export default Options;
