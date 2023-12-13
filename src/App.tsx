import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Logins from "./pages/logins";
import AdminLogin from "./components/admin/Login";
import LibrarianLogin from "./components/librarian/login";
import ReaderLogin from "./components/user/login";

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
          </Route>

          {/* Reader Routes */}
          <Route path="reader">
            <Route path="login" element={<ReaderLogin />} />
          </Route>

          {/* Librarian Routes */}
          <Route path="librarian">
            <Route path="login" element={<LibrarianLogin />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
