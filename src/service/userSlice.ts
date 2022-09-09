import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface UserState {
  id: string | null;
  name: string | null;
  token: string | null;
}

function parseJwt(token: string) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload);
}

const initialState: UserState = {
  id: null,
  name: null,
  token: localStorage.getItem('token'),
};

export const userSlice = createSlice({
  name: 'user',

  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      localStorage.setItem('token', action.payload);
      state.token = action.payload;
      const decryptedJWT = parseJwt(action.payload);
      state.name = decryptedJWT.name;
      state.id = decryptedJWT.id;
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const { logout } = userSlice.actions;

export const { setToken } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
