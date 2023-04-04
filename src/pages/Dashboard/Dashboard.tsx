// Libs
import { h } from 'preact';

// Components
import AuthCheck from './../../shared/components/AuthCheck';

const Dashboard = () => {
  return (
    <div>
      <AuthCheck authenticatable />
      <span>Dashboard</span>
    </div>
  );
};

export default Dashboard;
