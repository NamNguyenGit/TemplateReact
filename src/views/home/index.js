import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PostList from "../../components/post/postList";
import getPostSelector from "../../redux/selectors/post/getPostSelector";
import { listPost } from "../../redux/modules/post/actions";

const Home = () => {
  //! Define
  const dispatch = useDispatch();
  const posts = getPostSelector();
  const { data, loading, error } = posts;

  //! State
  useEffect(() => {
    dispatch(listPost());
  }, [dispatch]);

  //! Render
  return (
    <div>
      <h1>Home</h1>
      <PostList data={data} />
    </div>
  );
};

export default Home;
