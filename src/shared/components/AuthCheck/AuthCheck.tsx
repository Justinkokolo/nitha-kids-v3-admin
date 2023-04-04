// Libs
import { Fragment, h } from 'preact';
import { useEffect } from 'react';
import useLocalStorage from 'react-use-localstorage';
import { route } from 'preact-router';

// Utils
import routes from '../../routes';

interface IProps {
  authenticatable?: boolean;
}

const AuthCheck = ({ authenticatable = false }: IProps) => {
  // eslint-disable-next-line no-unused-vars
  const [auth, setAuth] = useLocalStorage('nithaAuth', '');

  useEffect(() => {
    if (authenticatable) {
      if (!auth) {
        route(routes.LOGIN.path);
      }
    } else {
      if (auth) {
        route(routes.HOME.path);
      }
    }
  }, []);

  return (
    <Fragment />
  );
};

export default AuthCheck;
