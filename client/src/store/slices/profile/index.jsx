import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProfiles: [],
    modalShow: false,
    selectedProfile: {
        index: 0,
        profile: {}
    }
}

const ProfileSlice = createSlice({
    name: "ProfileSlice",
    initialState,
    reducers: {
        getAllProfiles: () => { },
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
        },
        getEditedProfile: (profile) => profile

    }
})

export const { getAllProfiles, setAllProfiles, createProfile, setProfile, getEditedProfile } = ProfileSlice.actions
export const profileReducer = ProfileSlice.reducer