
import {createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
   
};

  

const blurSlice = createSlice({
    name:'blurMode',
    initialState,
   
    reducers: {
      blurLevels: (state) => {
       if((state.value >=0) && (state.value < 5))
        state.value += 1;
       if(state.value===5)
        state.value = 0; 
      },
    
    }
    
})    



export const { blurLevels } = blurSlice?.actions;

export const selectBlurMode = (state) => state?.blurMode?.value;

export default blurSlice?.reducer;
