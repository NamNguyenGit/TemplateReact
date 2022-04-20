import axios from "axios";
import { BASE_URL, APIConfig } from "../apiConfig";

export const getAllPost = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const getPostDetail = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};
