// Libs
import { h } from 'preact';

// Utils
import { Color } from '../../constants/colors';
import { FontSize } from '../../constants/fonts';
// @ts-ignore
import DrcFlag from './../../../assets/flags/cd.png';

// Components
import { ListItem, Wrapper, IconWrapper, Title, ListItemWrapper, ListItemWrapperFlag, Image, Flag } from './SelectList.styles';
import { Check } from 'react-feather';
import Typography from '../Typography';

interface IProps {
  selectedItem: {
    value: string | number;
    text: string,
    category?: string,
    image?: string
  } | undefined;
  list?: {
    value: string | number;
    text: string,
    category?: string,
    image?: string
  }[];
  multiple?: boolean;
  selections?: {
    value: string | number;
    text: string,
    category?: string,
    image?: string
  }[];
  isPublic?: boolean;
  onSelect: (text: {
    value: string | number;
    text: string,
    category?: string,
    image?: string
  }) => void;
  withFlag?: boolean;
};

const iconSize = 17;
const SelectList = ({
  list = [],
  onSelect,
  selectedItem,
  multiple,
  isPublic = false,
  selections = [],
  withFlag = false
} : IProps) => {
  const handleChecked = (item: {
    value: string | number;
    text: string,
    category?: string,
    image?: string
  }) => {
    if (multiple) {
      return selections.includes(item);
    } else {
      return selectedItem && selectedItem === item;
    }
  };

  return (
    <Wrapper isPublic={isPublic}>
      {list.map((item: {
        value: string | number;
        text: string,
        category?: string,
        image?: string
      }, index) => {
        const { text, category, image } = item;
        return (
          <ListItem
            onClick={() => onSelect(item)}
            key={index}
            withBorder={index !== list.length - 1}
          >
            {withFlag && (
              <ListItemWrapperFlag>
                {withFlag && <Flag src={DrcFlag} />}
                <Title isPublic={isPublic}>{text}</Title>
              </ListItemWrapperFlag>
            )}
            {!withFlag && (
              <ListItemWrapper>
                <Title isPublic={isPublic}>{text}</Title>
                {!!category && (
                  <Typography
                    text={category}
                    size={FontSize.XSmall}
                  />
                )}
              </ListItemWrapper>
            )}
            {handleChecked(item) && (
              <IconWrapper>
                <Check size={iconSize} color={Color.darkGray} />
              </IconWrapper>
            )}
            {!!image && <Image src={image} alt="text" />}
          </ListItem>
        );
      })}
    </Wrapper>
  );
};

export default SelectList;