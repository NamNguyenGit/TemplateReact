import * as types from "../../actionTypes";

export const listPost = () => ({
  type: types.LIST_POST,
});

export const listPostSuccess = (post) => ({
  type: types.LIST_POST_SUCCESS,
  payload: post,
});

export const listPostError = (error) => ({
  type: types.LIST_POST_ERROR,
  payload: error,
});

export const postDetail = (payload = {}) => ({
  type: types.POST_DETAIL,
  ...payload,
});

export const postDetailSuccess = (payload = {}) => ({
  type: types.POST_DETAIL_SUCCESS,
  ...payload,
});

export const postDetailError = (error) => ({
  type: types.POST_DETAIL_ERROR,
  payload: error,
});
