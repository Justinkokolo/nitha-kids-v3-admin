// Libs
import { h } from 'preact';
import { useEffect } from "react";

// Utils
import { Color } from '../../shared/constants/colors';
import { FontSize, FontWeight } from '../../shared/constants/fonts';
// import { useAppSelector, useAppDispatch } from "../../shared/redux/hooks";

// Components
// import Page from "../../shared/components/Page";
import OrderListHeader from "../../shared/components/OrderListHeader";
// import OrderListItem from "../../shared/components/OrderListItem";
import { Container , ActionsWrapper } from "../../styles/common.styles";
import Typography from '../../shared/components/Typography';
import AuthCheck from './../../shared/components/AuthCheck';

const Orders = () => {

  // const { orders } = useAppSelector((state) => state.order);
  // const dispatch = useAppDispatch();

  useEffect(() => {
    // @ts-ignore
    // dispatch(setOrder(null));
  }, []);

  // const { data } = orders; 

  return (
    <div>
      <Container>
        <AuthCheck authenticatable />
        <ActionsWrapper>
          <Typography
            text="Orders"
            weight={FontWeight.SemiBold}
            color={Color.textDark}
            size={FontSize.XLarge}
          />
        </ActionsWrapper>
        <OrderListHeader />

        {/* {data.map((order, index) => {
          const {
            id,
            name,
            address,
            description,
            price,
            date,
            quantity,
            reference,
          } = order;
          return (
            <OrderListItem
              id={id}
              name={name}
              address={address.address}
              description={}
              brand={}
              price={price}
              date={}
              quantity={}
              reference={reference}
              key={index}
            />
          );
        })} */}
      </Container>
    </div>
  );
};

export default Orders;
