import { createSlice} from "@reduxjs/toolkit"
import { InitialUserState } from "../Types";


const initialState: InitialUserState ={
    user:null,
};



export const userSlice = createSlice({
  name:"user",
  initialState,
  reducers:{
    login:(state,action)=> {
        state.user = action.payload;
    },
    logout: (state) => {
        state.user = null;
    },
  },
});

// userSlice内を確認する
// console.log(userSlice)


export const {login,logout} =userSlice.actions

export default userSlice.reducer;