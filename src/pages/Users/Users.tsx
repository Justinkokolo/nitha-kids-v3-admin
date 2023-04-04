// Libs
import { h } from 'preact';
import { useEffect } from 'react';

// Utils
import { Spacing } from '../../shared/constants/spacing';
import { FontSize, FontWeight } from '../../shared/constants/fonts';
import { Color } from '../../shared/constants/colors';
import { useAppSelector, useAppDispatch } from '../../shared/redux/hooks';
import { loadUsers } from '../../shared/redux/features/user/calls';

// Components
import AuthCheck from './../../shared/components/AuthCheck';
import Typography from '../../shared/components/Typography';
import Space from '../../shared/components/Space/Space';
import Form from './Form';
import List from './List';
import { Container, ColumnsWrapper, Column, ColumnsSeparator, } from '../../styles/common.styles';

const fontUser = FontSize.XXXSmall;
const weight = FontWeight.SemiBold;
const color = Color.default;

const Users = () => {
	const { users } = useAppSelector(state => state.user);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadUsers());
	}, []);

	return (
		<div>
			<AuthCheck authenticatable />
			<Container>
				<Typography
					text="Users"
					weight={FontWeight.SemiBold}
					color={Color.textDark}
					size={FontSize.Large}
				/>
				<Space size={Spacing.Large} />
				<ColumnsWrapper>
          <Column flex={1.5}>
            <Typography
              text={'NEW USER'}
              size={fontUser}
              weight={weight}
              color={color}
            />
            <Space size={Spacing.Small} />
            <Form />
          </Column>
          <ColumnsSeparator size={Spacing.Large} />
          <Column flex={3}>
            <Typography
              text="LIST OF USERS"
              size={fontUser}
              weight={weight}
              color={color}
            />
            <Space size={Spacing.Small} />
            
          </Column>
        </ColumnsWrapper>
			</Container>
		</div>
	);
};
//<List data={users.data} />
export default Users;
