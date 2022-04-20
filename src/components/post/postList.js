import { Link } from "react-router-dom";
import BASE_ROUTE from "../../constants/routeUrl";

const PostList = ({ data }) => {
  //! Render
  return (
    <div>
      <h1>PostList</h1>
      {data &&
        data.map((item, index) => (
          <Link key={index} to={BASE_ROUTE.post.detailWithID(item.id)}>
            <div>
              <p>
                <span>{item.id}</span> {item.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default PostList;
