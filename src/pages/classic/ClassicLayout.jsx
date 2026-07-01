import React from "react";
import { Outlet } from "react-router-dom";
import ClassicNavbar from "../../components/classic/ClassicNavbar.jsx";
import ClassicContact from "../../components/classic/ClassicContact.jsx";
import ClassicFooter from "../../components/classic/ClassicFooter.jsx";

const ClassicLayout = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ClassicNavbar />
      <main className="pt-24">
        <Outlet />
        <ClassicContact />
      </main>
      <ClassicFooter />
    </div>
  );
};

export default ClassicLayout;
