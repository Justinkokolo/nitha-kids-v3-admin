// Libs
import { h } from 'preact';
import MaterialIcon from '@material/react-material-icon';

// Utils
import { Color } from '../../../constants/colors';

// Components
import {
  Wrapper,
  MenuIconWrapper,
  IconWrapper,
  MenuRightIconsWrapper,
  LeftContentWrapper,
  UserWrapper
} from './Navigation.styles';
import { Menu, ShoppingBag } from 'react-feather';

const Navigation = () => {
  return (
    <Wrapper>
      <LeftContentWrapper>
        <MenuIconWrapper>
          <IconWrapper>
            <Menu size={20} color={Color.white} />
          </IconWrapper>
        </MenuIconWrapper>
      </LeftContentWrapper>
      <MenuRightIconsWrapper>
        <UserWrapper>
          <IconWrapper>
            <MaterialIcon icon='account_circle' style={{
              color: Color.white
            }} />
          </IconWrapper>
        </UserWrapper>
        <IconWrapper>
          <ShoppingBag size={18} color={Color.white} />
        </IconWrapper>
      </MenuRightIconsWrapper>
    </Wrapper>
  );
};

export default Navigation;
