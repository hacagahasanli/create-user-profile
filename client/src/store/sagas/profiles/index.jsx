import { call, fork, put, takeLatest } from "redux-saga/effects";
import { all_profiles, create_profile } from "../../../api";
import { getAllProfiles, setAllProfiles, createProfile, setProfile } from "../../slices/profile";

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

function* GetAllProfiles() {
    yield takeLatest(getAllProfiles, GetAllProfilesAsync)
}

function* GetCreatedProfile() {
    yield takeLatest(createProfile, CreateProfileAsync)
}

export const profileSaga = [
    fork(GetAllProfiles),
    fork(GetCreatedProfile),
];