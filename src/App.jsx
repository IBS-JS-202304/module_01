import { MainPage } from './pages/MainPage';
import { EmployeeCardPage } from './pages/EmployeeCardPage';
import { UseModalProvider } from './hooks/use-modal/useModalProvider';
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
      path: "employee/:employeeId",
      element: <EmployeeCardPage />,
    },
  ]);

  return (
    <div className="App">
      <UseModalProvider>
        <RouterProvider router={router} />
      </UseModalProvider>
    </div>
  );
}

export default App;
