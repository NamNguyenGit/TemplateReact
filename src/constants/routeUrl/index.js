const BASE_ROUTE = {
  post: {
    home: "/",
    about: "/about",
    detail: "/detail/:id",
    detailWithID: (id) => `/detail/${id}`,
  },
};

export default BASE_ROUTE;
