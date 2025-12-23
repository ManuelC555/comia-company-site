import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="container home-layout">
        
        <div className="home-text">
          <h1>{t("home.title")}</h1>
          <p>{t("home.soustitre")}</p>
          <p>{t("home.subtitle")}
            <Link to="/contact" className="cta-link">
            {t("home.cta")}
          </Link>
          </p>
        </div>

        <div className="home-image">
          <video
  className="hero-video"
  src="/videos/videocomia.mp4"
  controls
  muted
  poster="/images/comialogo.jpg"
/>

        </div>

      </div>
    </section>
  );
}
