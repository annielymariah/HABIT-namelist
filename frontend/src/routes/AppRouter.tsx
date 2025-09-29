import { BrowserRouter, Routes, Route } from "react-router";
import AddName from "@/pages/AddName";
import ViewNames from "@/pages/ViewNames";
import Home from "@/pages/Home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-name" element={<AddName />} />
        <Route path="/view-names" element={<ViewNames/>} />
      </Routes>
    </BrowserRouter>
  );
};