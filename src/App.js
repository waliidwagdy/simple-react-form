import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form/Form";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Form edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
