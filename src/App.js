import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Routers, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import about from "./views/about";
import PostDetail from "./components/post/postDetail";
import BASE_ROUTE from "./constants/routeUrl/index";

function App() {
  return (
    <Routers>
      <Switch>
        <Route exact path={BASE_ROUTE.post.home} component={Home} />
        <Route exact path={BASE_ROUTE.post.about} component={about} />
        <Route path={BASE_ROUTE.post.detail} component={PostDetail} />
      </Switch>
    </Routers>
  );
}

export default App;
