// Libs
import { h } from 'preact';
import { useState } from 'react';
import { route } from 'preact-router';

// Libs
import { FontSize, FontWeight } from '../../../constants/fonts';

// Components
import { Wrapper } from './SideBarItem.styles';
import Typography from '../../Typography';
import { Color } from '../../../constants/colors';

interface IProps {
  text: string;
  icon?: string;
  isActive: boolean;
  routeName: string;
  onClick: () => void;
}

const SideBarItem = ({ text, isActive = false, routeName, onClick }: IProps) => {
  const [hovered, setHovered] = useState(false);
  const active = hovered || isActive;

  return (
    <Wrapper
      isActive={isActive}
      onClick={() => {
        onClick();
        route(routeName);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* <IconWrapper>{icon}</IconWrapper> */}
      {/* <ion-icon name={icon}></ion-icon> */}
      <Typography
        text={text}
        weight={FontWeight.SemiBold}
        size={FontSize.XSmall}
        color={active ? Color.white : Color.darkGray}
      />
    </Wrapper>
  );
};

export default SideBarItem;
