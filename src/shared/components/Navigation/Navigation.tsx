// Libs
import { h } from 'preact';
import useLocalStorage from 'react-use-localstorage';

// Components
import { User, LogOut, Bell, Mail } from 'react-feather';
import { AuthWrapper, IconWrapper, DefaultIconWrapper, Wrapper, RightWrapper } from './Navigation.styles';
import Typography from '../Typography';
import { FontSize, FontWeight } from '../../constants/fonts';
import SearchBar from '../SearchBar/SearchBar';

const Navigation = () => {
  // eslint-disable-next-line no-unused-vars
  const [auth, setAuth] = useLocalStorage('nithaAuth', '');

  const onLogout = () => {
    setAuth('');
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <Wrapper>
      <SearchBar />
      <RightWrapper>
        <DefaultIconWrapper>
          <Mail size={15} />
        </DefaultIconWrapper>
        <DefaultIconWrapper>
          <Bell size={15} />
        </DefaultIconWrapper>
        <AuthWrapper>
          <IconWrapper>
            <User size={18} />
          </IconWrapper>
          <Typography
            text="Beni Kabona"
            size={FontSize.Small}
            weight={FontWeight.SemiBold}
          />
        </AuthWrapper>
        <DefaultIconWrapper onClick={() => onLogout()}>
          <LogOut size={15} />
        </DefaultIconWrapper>
      </RightWrapper>
    </Wrapper>
  );
};

export default Navigation;
