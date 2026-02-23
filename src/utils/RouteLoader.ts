const loader = {
  landing: () => import("../pages/Landing"),
  login:()=>import("../pages/Login"),
};

const RouteLoader = (key: keyof typeof loader) => {
  return async () => {
    const module = await loader[key]();
    return {
      Component: module.default,
    };
  };
};

export default RouteLoader;
