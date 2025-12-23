import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="container about-layout">

        <img
          src="/images/construction.jpg"
          alt="À propos de COMIA"
          className="about-image"
        />

        <div className="about-text">
          <h1>{t("about.title")}</h1>
          <p>{t("about.text")}</p>
        </div>
      </div>
      <div className="about-block reverse">
    <img src="/images/about/renovation.jpg" alt="Construction" />
    <div>
      <h3>{t("construction.title")}</h3>
      <p>{t("construction.text")}</p>
    </div>
  </div>
  <div className="about-block reverse">
    <img src="/images/about/sanitary.jpg" alt="sanitary" />
    <div>
      <h3>{t("sanitary.title")}</h3>
      <p>{t("sanitary.text")}</p>
    </div>
  </div>
  <div className="about-block reverse">
    <img src="/images/about/wood.jpg" alt="wood" />
    <div>
      <h3>{t("wood.title")}</h3>
      <p>{t("wood.text")}</p>
    </div>
  </div>
  <div className="about-block reverse">
    <img src="/images/about/finishing.jpg" alt="finishing" />
    <div>
      <h3>{t("finishing.title")}</h3>
      <p>{t("finishing.text")}</p>
      <Link to="/contact" className="cta">{t("cta.contact")}</Link>
    </div>
  </div>
    </section>
  );
}
