import TaskManagementSystem from "./pages/TaskManagementSystem";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./pages/Home";
import SocialMediaSystem from "./pages/SocialMediaSystem";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/task-management" element={<TaskManagementSystem />} />
          <Route path="/social-media" element={<SocialMediaSystem />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
