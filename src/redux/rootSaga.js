import { call, all, spawn } from "redux-saga/effects";
import postSaga from "./modules/post/postSaga";

function* rootSaga() {
  const sagas = [postSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}

export default rootSaga;
