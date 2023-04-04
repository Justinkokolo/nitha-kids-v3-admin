// Libs
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Type } from '../../../constants/alert';
import type { RootState } from '../../store';

// Utils
import { login, createUser, loadRoles, loadUsers, addUser, editUser } from './calls';
import { IUser, IRole } from '../../../../types/index';

// Define a type for the user state
interface UserState {
  user: {
    data?: IUser | null;
    status: string,
    alert: {
      type?: Type,
      message: string
    }
  },
  users: {
    data?: IUser[] | [];
    status: string,
    alert: {
      type?: Type,
      message: string
    }
  },
  roles: {
    data?: IRole[] | [];
    status: string,
  },
  userToEdit: {
    data?: IUser | null;
    status: string,
    alert: {
      type?: Type,
      message: string
    }
  },
}

// Define the initial state using that type
const initialState: UserState = {
  user: {
    data: null,
    status: '',
    alert: {
      message: ''
    }
  },
  users: {
    data: [],
    status: '',
    alert: {
      message: ''
    }
  },
  roles: {
    data: [],
    status: '',
  },
  userToEdit: {
    data: null,
    status: '',
    alert: {
      message: ''
    }
  },
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<{
      type?: Type,
      message: string
    }>) => {
      state.user.alert = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.userToEdit.data = action.payload;
    },
  },
  extraReducers: 
  (builder) => {
    // GET ROLES
    builder.addCase(loadRoles.pending, (state) => {
      state.roles.status = "loading";
    });
    builder.addCase(loadRoles.fulfilled, (state, action) => {
      state.roles.data = action.payload["roles"];
      state.roles.status = "success";
    });
    builder.addCase(loadRoles.rejected, (state) => {
      state.roles.status = "failed";
    });
     // GET USERS
     builder.addCase(loadUsers.pending, (state) => {
      state.users.status = "loading";
    });
    builder.addCase(loadUsers.fulfilled, (state, action) => {
      state.users.data = action.payload["users"];
      state.users.status = "success";
    });
    builder.addCase(loadUsers.rejected, (state) => {
      state.users.status = "failed";
    });
    // STORE
    builder.addCase(login.pending, (state) => {
      state.user.status = 'loading';
      state.user.alert = initialState.user.alert;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const { payload } = action;
      if (payload.error) {
        const alert = {
          type: Type.Error,
          message: 'Impossible de vous connectez avec ces identifiants'
        };
        state.user.alert = alert;
        state.user.status = 'failure';
      } else {
        const { payload } = action;
        const { access_token, user } = payload;
        const data: IUser = {
          id: user.id,
          token: access_token,
          verified: user.verified.toString() === '1',
          role: user.role.name,
          telephone: user.telephone,
          firstname: user.detail ? user.detail.firstname : '',
          lastname: user.detail ? user.detail.lastname : ''
        };
        state.user.status = 'success';
        state.user.data = data;
      }
    });
    builder.addCase(login.rejected, (state) => {
      state.user.status = 'failed';
      const alert = {
        type: Type.Error,
        message: 'An error has occurred'
      };
      state.user.alert = alert;
    });
    // CREATE USER
    builder.addCase(createUser.pending, (state) => {
      state.user.status = 'loading';
      state.user.alert = initialState.user.alert;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      const { payload } = action;
      if (payload.error) {
        const alert = {
          type: Type.Error,
          message: "Il existe déjà un compte avec ce numéro de telephone"
        };
        state.user.alert = alert;
        state.user.status = 'failure';
      } else {
        const alert = {
          type: Type.Success,
          message: 'Votre compte a été créé avec succès'
        };
        state.user.alert = alert;
        state.user.status = 'success';
      }
    });
    builder.addCase(createUser.rejected, (state) => {
      state.user.status = 'failed';
      const alert = {
        type: Type.Error,
        message: 'Une erreur est survenue, veillez réessayez'
      };
      state.user.alert = alert;
    });
    // ADD USER
    builder.addCase(addUser.pending, (state) => {
      state.user.status = 'loading';
      state.user.alert = initialState.user.alert;
    });
    builder.addCase(addUser.fulfilled, (state) => {
      const alert = {
        type: Type.Success,
        message: 'Un nouvel utilisateur a été ajouté avec succès'
      };
      state.user.alert = alert;
      state.user.status = 'success';
    });
    builder.addCase(addUser.rejected, (state) => {
      state.user.status = 'failed';
      const alert = {
        type: Type.Error,
        message: 'Une erreur est survenue, veillez réessayez'
      };
      state.user.alert = alert;
    });
    // ADD USER
    builder.addCase(editUser.pending, (state) => {
      state.user.status = 'loading';
      state.user.alert = initialState.user.alert;
    });
    builder.addCase(editUser.fulfilled, (state) => {
      const alert = {
        type: Type.Success,
        message: "Les données de l'utilisateur ont été modifiées avec succès"
      };
      state.user.alert = alert;
      state.user.status = 'success';
    });
    builder.addCase(editUser.rejected, (state) => {
      state.user.status = 'failed';
      const alert = {
        type: Type.Error,
        message: 'Une erreur est survenue, veillez réessayez'
      };
      state.user.alert = alert;
    });
  },
});

export const { setAlert, setUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
