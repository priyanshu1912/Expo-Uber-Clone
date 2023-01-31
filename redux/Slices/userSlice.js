import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTime: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setOrigin: (state,action) => {
            state.origin = action.payload
        },
        setDestination: (state,action) => {
            state.destination = action.payload
        },
        setTravelTime: (state,action) => {
            state.travelTime = action.payload
        }
    }
})

export default userSlice.reducer
export const {setOrigin, setDestination, setTravelTime} = userSlice.actions