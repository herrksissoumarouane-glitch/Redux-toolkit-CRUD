import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:4,
    name:''
}
const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        addOne:(state)=>{
            state.count+=1
        },
        subOne:(state)=>{
            state.count-=1
        },
        res:(state)=>{
            state.count=0
        },
        setname:(state,action)=>{
            state.name=action.payload // payload
        }
    }
})
export const {addOne,subOne,res,setname}=counterSlice.actions
export default counterSlice.reducer