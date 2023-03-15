import { all } from "redux-saga/effects"
import { profileSaga } from "./profiles"

export default function* rootSaga() {
    yield all([...profileSaga])
}