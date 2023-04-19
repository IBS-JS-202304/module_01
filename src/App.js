import { EmployeeList } from './components/EmployeeList';
import { EmployeeCard } from './components/EmployeeCard';
import './App.css'; import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <EmployeeList />,
    }, {
      path: "employee/:employeeId",
      element: <EmployeeCard />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
