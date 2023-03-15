import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProfiles: []
}

const ProfileSlice = createSlice({
    name: "ProfileSlice",
    initialState,
    reducers: {
        getAllProfiles: () => {
            return
        },
        setAllProfiles: (state, action) => {
            const profiles = action.payload;
            state.allProfiles = [...profiles]
        }
    }
})

export const { getAllProfiles } = ProfileSlice.actions
export const profileReducer = ProfileSlice.reducer