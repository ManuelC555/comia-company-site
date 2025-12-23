import { useState } from "react";
import { useTranslation } from "react-i18next";

// Images
import gonaives1 from "../assets/projects/gonaives1.jpg";
import gonaives2 from "../assets/projects/gonaives2.jpg";
import gonaives3 from "../assets/projects/gonaives3.jpg";
import gonaives4 from "../assets/projects/gonaives4.jpg";
import gonaives5 from "../assets/projects/gonaives5.jpg";
import portDePaixMap from "../assets/projects/map-port-de-paix.jpg";

export default function Projects() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
  {
    id: 1,
    image: gonaives1,
    statusKey: "inProgress",
    title: t("projects.gonaivesResidence"),
    location: "Gonaïves",
  },
  {
    id: 2,
    image: gonaives2,
    statusKey: "inProgress",
    title: t("projects.gonaivesResidence"),
    location: "Gonaïves",
  },
  {
    id: 3,
    image: gonaives3,
    statusKey: "inProgress",
    title: t("projects.gonaivesResidence"),
    location: "Gonaïves",
  },
  {
    id: 4,
    image: gonaives4,
    statusKey: "inProgress",
    title: t("projects.gonaivesResidence"),
    location: "Gonaïves",
  },
  {
    id: 5,
    image: gonaives5,
    statusKey: "study",
    title: t("projects.gonaivesResidence"),
    location: "Gonaïves",
  },
  {
    id: 6,
    image: portDePaixMap,
    statusKey: "study",
    title: t("projects.portDePaixResidence"),
    location: "Port-de-Paix",
  },
];


  return (
    <section className="projects">
      <h1>{t("projects.title")}</h1>
      <p className="projects-subtitle">{t("projects.subtitle")}</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedImage(project.image)}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <span className={`status ${project.statusKey}`}>
              {t(`projects.status.${project.statusKey}`)}
              </span>

              <h3>{project.title}</h3>
              <p className="project-desc">
              {t("projects.residenceDescription")}
              </p>
              <p>{project.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal image */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Project full view" />
        </div>
      )}
    </section>
  );
}
