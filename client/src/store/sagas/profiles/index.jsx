import { call, fork, put, takeLatest } from "redux-saga/effects";
import { all_profiles, create_profile, update_profile } from "../../../api";
import { getAllProfiles, setAllProfiles, createProfile, setProfile, getEditedProfile } from "../../slices/profile";

function* GetAllProfilesAsync() {
    try {
        const profiles = yield call(all_profiles);
        yield put(setAllProfiles(profiles))
    } catch (err) {
        console.log(err);
    }
}

function* CreateProfileAsync({ payload }) {
    try {
        const createdProfile = yield call(create_profile, payload)
        yield put(setProfile(createdProfile))
    } catch (err) {
        console.log(err);
    }
}

function* UpdateProfileAsync({ payload }) {
    try {
        const updatedProfile = yield call(update_profile, payload)
        console.log(updatedProfile);
    } catch (err) {
        console.log(err);
    }
}

function* GetAllProfiles() {
    yield takeLatest(getAllProfiles, GetAllProfilesAsync)
}

function* GetUpdatedProfile() {
    yield takeLatest(getEditedProfile, UpdateProfileAsync)
}

function* GetCreatedProfile() {
    yield takeLatest(createProfile, CreateProfileAsync)
}

export const profileSaga = [
    fork(GetAllProfiles),
    fork(GetCreatedProfile),
    fork(GetUpdatedProfile)
];