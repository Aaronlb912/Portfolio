import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import ClassicNavbar from "../../components/classic/ClassicNavbar.jsx";
import ClassicContact from "../../components/classic/ClassicContact.jsx";
import ClassicFooter from "../../components/classic/ClassicFooter.jsx";

const ClassicLayout = () => {
  useEffect(() => {
    document.documentElement.dataset.portfolio = "classic";
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ClassicNavbar />
      <main id="main" className="pt-24">
        <Outlet />
        <ClassicContact />
      </main>
      <ClassicFooter />
    </div>
  );
};

export default ClassicLayout;
