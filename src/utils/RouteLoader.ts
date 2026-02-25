const loader = {
  landing: () => import("../pages/Landing"),
  login:()=>import("../pages/Login"),
  analyzer:()=>import('../pages/AnalyserPage'),
  history:()=>import('../pages/HistoryPage'),
  setting:()=>import('../pages/SettingPage'),
  dashboard:()=>import('../pages/DashboardPage')
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
