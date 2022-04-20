import { useSelector } from "react-redux";

const GetPostDetailSelector = () => {
  const post = useSelector((state) => state.postReducer.post);
  return post;
};

export default GetPostDetailSelector;
