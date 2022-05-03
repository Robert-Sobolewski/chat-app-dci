import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Chat} from '../../../types'

interface IRootUser{
    user:IUserInfo
}


interface IUserInfo {
    user: Chat.IUser|null
    isFetching: boolean
    error:boolean
}

const init:IUserInfo ={
    
    user: localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')!):null,
    isFetching: false,
    error: false
}

const userSlice = createSlice({ 
    name:"user",
    initialState: init,
    reducers:{
        login: (state:any, action:PayloadAction<Chat.IUser>)=>{
            localStorage.setItem('user',JSON.stringify(action.payload))
            state.user = action.payload
        },
        logout: (state:any)=>{
            localStorage.removeItem('user');
            state.value = null;
        }
    }
});

export default userSlice.reducer;
export const {login, logout} = userSlice.actions
export const selectUser = (state:IRootUser) =>state.user.user;