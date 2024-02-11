import { useContext, lazy, Suspense } from "react";
import { ThemeContext } from "./context/theme.context";
import Navbar from "./components/navbar/Navbar.component";
import { Routes, Route } from "react-router-dom";
import CustomCircularProgress from "./components/Custom-circular-progress/CustomCircularProgress.component";

//import Home from "./pages/home/Home.page";

// Import with lazy laoding
const Home = lazy(() => import("./pages/home/Home.page"));
const Areas = lazy(() => import("./pages/areas/Areas.page"));
const AddArea = lazy(() => import("./pages/areas/AddArea.page"));
const Employees = lazy(() => import("./pages/employees/Employees.page"));
const AddEmployee = lazy(() => import("./pages/employees/AddEmployee.page"));

const AttendanceRecords = lazy(
  () => import("./pages/attendanceRecord/AttendanceRecord.page")
);
const App = () => {
  const { darkMode } = useContext(ThemeContext);

  const appStyles = darkMode ? "app dark" : "app";
  return (
    <div className={appStyles}>
      <Navbar />
      <div className="wrapper">
        <Suspense fallback={<CustomCircularProgress />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/areas">
              <Route index element={<Areas />} />
              <Route path="add" element={<AddArea />} />
            </Route>
            <Route path="/employees">
              <Route index element={<Employees />} />
              <Route path="add" element={<AddEmployee />} />
            </Route>
            <Route path="/attendanceRecords">
              <Route index element={<AttendanceRecords />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
