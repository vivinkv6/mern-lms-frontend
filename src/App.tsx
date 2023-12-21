import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Logins from "./pages/logins";

//admin components
import AdminLogin from "./components/admin/AdminLogin";
import AdminSignup from './components/admin/Signup';

//librarian components
import LibrarianLogin from "./components/librarian/LibrarianLogin";
// import LibrarianSignup from "./components/librarian/Signup";

//reader components
import ReaderLogin from "./components/user/ReaderLogin";
import ReaderSignup from './components/user/Signup';
import AdminDashboard from "./components/admin/Dashboard/AdminDashboard";
import LibrarianDashboard from "./components/librarian/Dashboard/LibrarianDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users">
          <Route path="" element={<Logins />} />

          {/* Admin Routes */}
          <Route path="admin">
            <Route path="login" element={<AdminLogin />} />
            <Route path="signup" element={<AdminSignup/>} />
            <Route path="dashboard" element={<AdminDashboard/>} />
          </Route>

          {/* Reader Routes */}
          <Route path="reader">
            <Route path="login" element={<ReaderLogin />} />
            <Route path="signup" element={<ReaderSignup/>} />
          </Route>

          {/* Librarian Routes */}
          <Route path="librarian">
            <Route path="login" element={<LibrarianLogin />} />
            <Route path="dashboard" element={<LibrarianDashboard/>}/>
            {/* <Route path="signup" element={<LibrarianSignup/>} /> */}
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
