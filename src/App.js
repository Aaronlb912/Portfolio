import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PortfolioModeProvider, usePortfolioMode } from "./context/PortfolioModeContext.jsx";
import ClassicLayout from "./pages/classic/ClassicLayout.jsx";
import ClassicHomePage from "./pages/classic/ClassicHomePage.jsx";
import CaseStudiesPage from "./pages/classic/CaseStudiesPage.jsx";
import CaseStudyDetailPage from "./pages/classic/CaseStudyDetailPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import ToolDeck from "./components/ToolDeck.jsx";
import GameRoom from "./components/GameRoom.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const ClassicPortfolio = () => (
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
const RetroPortfolio = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <Navbar />
    <main className="pt-14">
      <Intro />
      <ToolDeck />
      <GameRoom />
      <Contact />
    </main>
    <Footer />
  </div>
);

const PortfolioContent = () => {
  const { mode } = usePortfolioMode();
  return mode === "classic" ? <ClassicPortfolio /> : <RetroPortfolio />;
};

function App() {
  return (
    <PortfolioModeProvider>
      <PortfolioContent />
    </PortfolioModeProvider>
  );
}

export default App;
