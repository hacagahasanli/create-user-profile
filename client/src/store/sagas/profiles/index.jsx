import { call, fork, put, takeLatest } from "redux-saga/effects";
import { all_profiles } from "../../../api";
import { getAllProfiles, setAllProfiles } from "../../slices/profile";



function* GetAllProfilesAsync({ payload }) {
    try {
        const profiles = yield call(all_profiles);
        yield put(setAllProfiles(profiles))
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