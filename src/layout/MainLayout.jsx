import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("meta.title");
  }, [i18n.language, t]);

  return (
    <div className="app">
      <Navbar />
      <main className="main page-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
