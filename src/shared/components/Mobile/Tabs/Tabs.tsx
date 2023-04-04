// Libs
import { h } from 'preact';

// Utils
import { Color } from '../../../constants/colors';
import { FontSize, FontWeight } from '../../../constants/fonts';

// Components
import { Wrapper, TabWrapper, InnerWrapper } from './Tabs.styles';
import Typography from '../../Typography/Typography';

interface IChilProps {
  text: string;
  badge: number;
  selected: boolean;
}

const Tab = ({ text, badge, selected = false }: IChilProps) => {
  return (
    <TabWrapper>
      <Typography
        text={text}
        weight={selected ? FontWeight.Bold : FontWeight.Regular}
        size={FontSize.ExtraMedium}
        clickable
        bagde={badge.toString()}
        color={selected ? Color.darkestBlue : Color.default}
      /> 
    </TabWrapper>
  );
};

const Tabs = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Tab text="Tout" badge={12} selected />
        <Tab text="Chaussaures" badge={4} selected={false} />
        <Tab text="Sandales" badge={18} selected={false} />
        <Tab text="Robes" badge={10} selected={false} />
        <Tab text="Ensemble" badge={10} selected={false} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Tabs;
