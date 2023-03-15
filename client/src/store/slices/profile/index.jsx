import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProfiles: [],
    newProfile: {}
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
        },
        createProfile: (formData) => {
            return formData
        },
        setProfile: (state, action) => {
            const profile = action.payload;
            state.allProfiles = [...state.allProfiles, profile]
        }
    }
})

export const { getAllProfiles, setAllProfiles, createProfile, setProfile } = ProfileSlice.actions
export const profileReducer = ProfileSlice.reducer