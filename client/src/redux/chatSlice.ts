import { createSlice } from "@reduxjs/toolkit";

interface IRootChat{
    chat: IChat
}
interface IChat{
    chat: string[];
}

const init: IChat={
    chat: []
}

const chatSlice = createSlice({
    name:"chat",
    initialState: init,
    reducers:{
        addMessage: (state, action) => {
            state.chat.push(action.payload)
        }
    }

});

export default chatSlice.reducer;
export const {addMessage} = chatSlice.actions
export const selectChat = (state: IRootChat)=> state.chat.chat

