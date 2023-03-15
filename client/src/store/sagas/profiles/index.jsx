import { call, fork, takeLatest } from "redux-saga/effects";
import { all_profiles } from "../../../api";
import { getAllProfiles } from "../../slices/profile";



function* GetAllProfilesAsync({ payload }) {
    try {
        const profiles = yield call(all_profiles);
        console.log(profiles, 'PROFILES');
    } catch (err) {
        console.log(err);
    }
}

function* GetAllProfiles() {
    yield takeLatest(getAllProfiles, GetAllProfilesAsync)
}


export const profileSaga = [
    fork(GetAllProfiles),
];