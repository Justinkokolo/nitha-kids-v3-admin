// Libs
import { h } from 'preact';

// Utils
import { Color } from '../../shared/constants/colors';
import { FontSize, FontWeight } from '../../shared/constants/fonts';

// Components
import Page from './../../shared/components/Page';
import DeliveryListHeader from "./../../shared/components/DeliveryListHeader";
import DeliveryListItem from "./../../shared/components/DeliveryListItem";
import { Container , ActionsWrapper } from "../../styles/common.styles";
import Typography from '../../shared/components/Typography';
import AuthCheck from './../../shared/components/AuthCheck';

const Dashboard = () => {
  return (
    <div>
      <Container>
        <AuthCheck authenticatable />
        <ActionsWrapper>
          <Typography
            text="Deliveries"
            weight={FontWeight.SemiBold}
            color={Color.textDark}
            size={FontSize.XLarge}
          />
        </ActionsWrapper>
        <DeliveryListHeader />
        <DeliveryListItem
          name="Justin Kokolo"
          description=""
          address="9 Roland Street"
          price={25}
          date={"2018-08-14"}
          quantity={10}
          reference="455568545"
        />
      </Container>
    </div>
  );
};

export default Dashboard;