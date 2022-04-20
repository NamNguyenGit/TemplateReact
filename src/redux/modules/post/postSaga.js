import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as types from "../../actionTypes";
import {
  listPostError,
  listPostSuccess,
  postDetailError,
  postDetailSuccess,
} from "./actions";

import { getAllPost, getPostDetail } from "../../../constants/api/post/postApi";

function* onLoadPost() {
  try {
    const response = yield call(getAllPost);
    if (response.status === 200) {
      yield put(listPostSuccess(response.data));
    }
  } catch (error) {
    yield put(listPostError(error.response.data));
  }
}

function* onLoadDetail({ id }) {
  try {
    const response = yield call(getPostDetail, id);
    if (response.status === 200) {
      yield put(postDetailSuccess({ post: response?.data || {} }));
    }
  } catch (error) {
    yield put(postDetailError(error.response.data));
  }
}

export default function* watchSaga() {
  yield takeEvery(types.LIST_POST, onLoadPost);
  yield takeLatest(types.POST_DETAIL, onLoadDetail);
}
