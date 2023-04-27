import { MainPage } from './pages/MainPage';
import { EmployeeCardPage } from './pages/EmployeeCardPage';
import { EmployeeAddPage } from './pages/EmployeeAddPage';
import { SearchPage } from './pages/SearchPage';
import './App.css'; import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },
    {
      path: "employee/add",
      element: <EmployeeAddPage />,
    },
    {
      path: "employee/:employeeId",
      element: <EmployeeCardPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
