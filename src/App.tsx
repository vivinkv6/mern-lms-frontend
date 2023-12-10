import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Logins from "./pages/logins";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Logins />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
