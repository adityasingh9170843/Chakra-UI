import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import RootLayout from "./layouts/RootLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="create" element={<Create />}  />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
