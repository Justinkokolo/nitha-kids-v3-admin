// Libs
import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';
import { Provider } from 'react-redux';

// Utils
import routes from './shared/routes';
import { store } from './shared/redux/store';

// Pages
import ProductList from './pages/Products/List';
import ProductForm from './pages/Products/Form';
import ProductEdit from './pages/Products/Edit';
import Resources from './pages/Resources';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Deliveries from './pages/Deliveries';
import Users from './pages/Users';

// Components
import Page from './shared/components/Page';

const App: FunctionalComponent = () => {
	return (
		<Provider store={store}>
			<div id="preact_root">
				<Page>
					<Router>
            <Route exact={true} path={routes.USERS.path} component={Users} />
						<Route exact={true} path={routes.HOME.path} component={Dashboard} />
						<Route
							exact={true}
							path={routes.DASHBOARD.path}
							component={Dashboard}
						/>
						<Route
							exact={true}
							path={routes.PRODUCTLIST.path}
							component={ProductList}
						/>
						<Route
							exact={true}
							path={routes.PRODUCTFORM.path}
							component={ProductForm}
						/>
						<Route path={routes.PRODUCTFORMEDIT.path} component={ProductEdit} />
						<Route
							exact={true}
							path={routes.RESOURCES.path}
							component={Resources}
						/>
						<Route exact={true} path={routes.LOGIN.path} component={Login} />
						<Route exact={true} path={routes.ORDERS.path} component={Orders} />
						<Route
							exact={true}
							path={routes.DELIVERIES.path}
							component={Deliveries}
						/>
					</Router>
				</Page>
			</div>
		</Provider>
	);
};

export default App;
