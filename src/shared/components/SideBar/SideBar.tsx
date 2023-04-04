// Libs
import { h } from 'preact';
import { route } from 'preact-router';
import { useState } from 'react';

// Utils
import routes from '../../routes';

// Components
import { Wrapper, LogoWrapper, Logo } from './SideBar.styles';
import SideBarItem from './SideBarItem';

const image = 'https://res.cloudinary.com/drj02qnpn/image/upload/v1628575095/Beni_LOGO_CONCEPTION_01-17.png';
const SideBar = () => {
  const [activePage, setActivePage] = useState('');
  return (
    <Wrapper>
      <LogoWrapper onClick={() => route(routes.HOME.path)}>
        <Logo src={image} alt="Logo" />
      </LogoWrapper>
      <SideBarItem
        onClick={() => setActivePage('Dashboard')}
        text="Dashboard"
        icon="heart"
        isActive={activePage === 'Dashboard'}
        routeName={routes.DASHBOARD.path}
      />
      <SideBarItem
        onClick={() => setActivePage('Products')}
        text="Products"
        icon="heart"
        isActive={activePage === 'Products'}
        routeName={routes.PRODUCTLIST.path}
      />
      <SideBarItem
        onClick={() => setActivePage('Orders')}
        text="Orders"
        icon="heart"
        isActive={activePage === 'Orders'}
        routeName={routes.ORDERS.path}
      />
      <SideBarItem
        onClick={() => setActivePage('Deliveries')}
        text="Deliveries"
        icon="heart"
        isActive={activePage === 'Deliveries'}
        routeName={routes.DELIVERIES.path}
      />
      <SideBarItem
        onClick={() => setActivePage('Resources')}
        text="Resources"
        icon="heart"
        isActive={activePage === 'Resources'}
        routeName={routes.RESOURCES.path}
      />
      <SideBarItem
        onClick={() => setActivePage('Users')}
        text="Users"
        icon="heart"
        isActive={activePage === 'Users'}
        routeName={routes.USERS.path}
      />
    </Wrapper>
  );
};

export default SideBar;
