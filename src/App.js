import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClassicLayout from "./pages/classic/ClassicLayout.jsx";
import ClassicHomePage from "./pages/classic/ClassicHomePage.jsx";
import CaseStudiesPage from "./pages/classic/CaseStudiesPage.jsx";
import CaseStudyDetailPage from "./pages/classic/CaseStudyDetailPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ClassicLayout />}>
          <Route index element={<ClassicHomePage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="case-studies/:slug" element={<CaseStudyDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
