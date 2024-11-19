import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    person: [{
        id: 1,
        name: 'Manish',
        age: 25,
    },

    {
        id: 2,
        name: 'Amsh Bro',
        age: 22,

    }
    ],
   

}

const counterSlice = createSlice({

    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            const productId = action.payload;
            console.log(productId)
            const find_age=state.person.find((value)=>value.id===productId);
            console.log(find_age.name);
            find_age.age += 1;
            console.log(find_age.age);
        }
    }

})

export default counterSlice.reducer
export const { increment } = counterSlice.actions