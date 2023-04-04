// Libs
import { h } from 'preact';
import { useState, useEffect } from 'react';

// Utils
import { Spacing } from '../../../shared/constants/spacing';
import { Type } from '../../../shared/constants/size';
import { useAppSelector, useAppDispatch } from '../../../shared/redux/hooks';
import {
	addUser,
	editUser,
	loadRoles,
} from '../../../shared/redux/features/user/calls';
import { setUser } from '../../../shared/redux/features/user/slice';
import { Color } from '../../../shared/constants/colors';
import { refactorList } from '../../../shared/helpers/utils';

// Components
import Panel from '../../../shared/components/Panel';
import TextField from '../../../shared/components/TextField';
import SelectField from '../../../shared/components/SelectField';
import Space from '../../../shared/components/Space';
import Button from '../../../shared/components/Button';
import { FlewColumn } from '../../../styles/common.styles';

const Form = () => {
	const dispatch = useAppDispatch();
	const { users, userToEdit, roles } = useAppSelector(state => state.user);

	const { status } = users;

  const [rolesList, setRoles] = useState<
    { value: number; text: string }[]
  >([]);
	const [firstname, setFirstName] = useState('');
	const [lastname, setLastName] = useState('');
	const [telephone, setPhoneNumber] = useState('');
	const [role, setRole] = useState<string | number>('');
	const [firstnameErrorMessage, setFirstNameErrorMessage] = useState('');
	const [lastnameErrorMessage, setLastNameErrorMessage] = useState('');
	const [phonenumerErrorMessage, setPhoneErrorMessage] = useState('');
	const [roleErrorMessage, setRoleErrorMessage] = useState('');

	const onSubmit = () => {
		setFirstNameErrorMessage(firstname ? '' : 'Ce champ est obligatoire');
		setLastNameErrorMessage(lastname ? '' : 'Ce champ est obligatoire');
		setPhoneErrorMessage(telephone ? '' : 'Ce champ est obligatoire');
		setRoleErrorMessage(role ? '' : 'Ce champ est obligatoire');

	  if (!firstname || !lastname || !telephone || !role) return;
		dispatch(
			userToEdit.data
				? // @ts-ignore
          editUser({ id: userToEdit.id, firstname, lastname, telephone, role })
				: // @ts-ignore
				  addUser({ firstname, lastname, telephone, role })
		);
	};

	useEffect(() => {
		dispatch(loadRoles());
	}, []);

	useEffect(() => {
		if (status === 'success') {
			setFirstName('');
			setLastName('');
			setPhoneNumber('');
			setRole('');
		}
	}, [status]);

	useEffect(() => {
		if (roles.status === 'success' && roles.data) {
      
      const List = refactorList(roles.data);
      setRoles(List);
		}
	}, [roles.status]);

	useEffect(() => {
		if (userToEdit && userToEdit.data) {
			setFirstName(userToEdit.data.firstname);
			setLastName(userToEdit.data.lastname);
			setPhoneNumber(userToEdit.data.telephone);
			setRole(userToEdit.data.role);
		}
	}, [userToEdit]);

	useEffect(() => {
		if (!firstname || !lastname || !telephone || !role) {
			dispatch(setUser(null));
		}
	}, [firstname, lastname, telephone, role]);

	return (
		<Panel size={Type.Medium}>
			<FlewColumn>
				<TextField
					id="firstname"
					value=""
					label="First Name"
					onChange={text => setFirstName(text)}
					errorMessage={firstname ? '' : lastnameErrorMessage}
				/>
				<Space size={Spacing.Medium} />
				<TextField
					id="lastname"
					value={lastname}
					label="Last Name"
					onChange={text => setLastName(text)}
					errorMessage={lastname ? '' : firstnameErrorMessage}
				/>
				<Space size={Spacing.Medium} />
				<TextField
					id="telephone"
					value={telephone}
					label="Telephone"
					onChange={text => setPhoneNumber(text)}
					errorMessage={telephone ? '' : phonenumerErrorMessage}
				/>
				<Space size={Spacing.Medium} />
				<SelectField
					id="role"
					label="Role"
					// @ts-ignore
					onChange={(item) => {
            setRole(item.value);
          }}
					errorMessage={roleErrorMessage}
					list={rolesList}
				/>
				<Space size={Spacing.Medium} />
				<Button
					text="Save"
					onClick={onSubmit}
					size={Type.Large}
					color={Color.white}
					backgroundColor={Color.textDark}
					loading={status === 'loading'}
				/>
			</FlewColumn>
		</Panel>
	);
};

export default Form;
