import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} COMIA – {t("footer.company")}</p>
      <p>{t("footer.slogan")}</p>
    </footer>
  );
}
