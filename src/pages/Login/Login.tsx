// Libs
import { h } from 'preact';
import { useState, useEffect } from 'react';
import useLocalStorage from 'react-use-localstorage';

// Utils
import { Spacing } from '../../shared/constants/spacing';
import { Color } from '../../shared/constants/colors';
import { Type } from '../../shared/constants/size';
import { useAppSelector, useAppDispatch } from '../../shared/redux/hooks';
import { login } from '../../shared/redux/features/user/calls';

// Components
import { Wrapper, InnerWrapper, Logo, LogoContainer } from './Login.styles';
import Space from '../../shared/components/Space';
import TextField from '../../shared/components/TextField';
import PhoneNumber from '../../shared/components/PhoneNumber';
import Button from '../../shared/components/Button';
import Alert from '../../shared/components/Alert';
import AuthCheck from './../../shared/components/AuthCheck';

const logo = 'https://res.cloudinary.com/drj02qnpn/image/upload/v1628432179/Beni_LOGO_CONCEPTION_01-15.png';

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [auth, setAuth] = useLocalStorage('nithaAuth', '');
  const [telephone, setTelephone] = useState('');
  const [telephoneTouched, setTelephoneTouched] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { status, alert } = user;
  const { type, message } = alert;
  const loading = status === 'loading';

  const onLogin = () => {
    // @ts-ignore
    dispatch(login({ telephone, password }));
  };

  useEffect(() => {
    const { data } = user;
    if (status === 'success' && data) {
      setAuth(JSON.stringify(data));
      if (typeof window !== "undefined") {
        window.location.reload();
      }
    }
  }, [user, status]);

  const isDisabled = (!telephone || !password);
  const buttonText = 'Se connecter';

  return (
    <Wrapper>
      <AuthCheck />
      <InnerWrapper>
        <LogoContainer>
          <Logo src={logo} alt="Nitha kids" />
        </LogoContainer>
        <Space size={Spacing.Medium} />
        <Alert type={type} text={message} show={!!message} />
        <Space size={Spacing.Small} />
        <PhoneNumber
          id="telephone"
          type="tel"
          label="Numéro de telephone"
          onChange={text => {
            setTelephoneTouched(true);
            setTelephone(text);
          }}
          value={telephone}
          errorMessage={!telephone && telephoneTouched ? 'Ce champ est obligatoire' : ''}
        />
        <Space size={Spacing.Small} />
        <TextField
          id="password"
          type="password"
          label="Mot de passe"
          value={password}
          errorMessage={!password && passwordTouched ? 'Ce champ est obligatoire' : ''}
          onChange={(text) => {
            setPasswordTouched(true);
            setPassword(text);
          }}
          onSubmit={() => {
            if (!isDisabled) onLogin();
          }}
        />
        <Space size={Spacing.Medium} />
        <Button
          text={loading ? 'Un instant...' : buttonText}
          withFullWidth
          size={Type.Large}
          backgroundColor={Color.green}
          color={Color.white}
          loading={loading}
          disabled={isDisabled}
          onClick={onLogin}
        />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Login;
