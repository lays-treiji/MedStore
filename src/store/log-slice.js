const { createSlice } = require('@reduxjs/toolkit');

const logSlice = createSlice({
  name: 'log',
  initialState: { isLogin: false, users: '' },
  reducers: {
    toggle(state) {
      state.isLogin = !state.isLogin;
    },

    addUser(state, action) {
      state.users = action.payload;
      // const newUser = action.payload;
      // state.usesrs.push({
      //   newUser,
      // });
    },
  },
});

export const logAction = logSlice.actions;
export default logSlice;
