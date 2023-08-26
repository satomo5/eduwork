import { Routes as Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import { PATH } from "./const/route";
import { DATA_ROUTE_PAGE_WITHOUT_SIDEBAR } from "./const/const";
import { useCheckCurrentPath } from "./helper/function";

function useWithoutSidebar() {
  const path = useCheckCurrentPath();
  const data = DATA_ROUTE_PAGE_WITHOUT_SIDEBAR?.filter(item => item === path)

  return data?.length > 0
}

function App() {
  const withoutSidebar = useWithoutSidebar()
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <Navigation withoutSidebar={withoutSidebar} />
      <main className={`${!withoutSidebar ? 'md:ml-64' : ''} p-4 min-h-screen pt-20`}>
        <Switch>
          {PATH?.map((item, id) => <Route key={id} path={item.path} element={item.element} />)}
        </Switch>
      </main>
    </div>
  );
}

export default App;
