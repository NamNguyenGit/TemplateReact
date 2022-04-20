import { useSelector } from "react-redux";

const GetPostSelector = () => {
  const posts = useSelector((state) => state.postReducer.posts);
  return posts;
};

export default GetPostSelector;
