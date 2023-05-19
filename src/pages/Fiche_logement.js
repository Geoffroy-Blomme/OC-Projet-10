import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logements from "./../assets/logements.json";
import MainHeader from "../components/Main_Header";
import Carrousel from "../components/Carrousel";
import MainFooter from "../components/Main_footer";
import Tag from "../components/Tag";
import Dropdown from "./../components/Dropdown";
import "./Fiche_logement.css";

export default function FicheLogement() {
  const { logementId } = useParams();
  const navigate = useNavigate();

  const recupData = () => {
    for (let i = 0; i < logements.length; i++) {
      if (logements[i].id === logementId) {
        return logements[i];
      }
    }
  };

  const logementData = recupData();

  // Si on ne trouve pas les donnees pour le Logement, cela signifie que l'id mis en parametre est incorrect : on renvoie vers la page 404.
  useEffect(() => {
    if (!logementData) {
      navigate("/404", { replace: true });
    }
  }, []);

  const GenerateTags = () => {
    const tags = [];
    logementData.tags.map((tag, index) => {
      tags.push(<Tag title={tag} key={index} />);
    });
    return tags;
  };

  const GenerateRatings = () => {
    const svgs = [];
    for (let i = 0; i < 5; i++) {
      if (i >= parseInt(logementData.rating)) {
        svgs.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"
              fill="#E3E3E3"
            />
          </svg>
        );
      } else {
        svgs.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"
              fill="#FF6060"
            />
          </svg>
        );
      }
    }
    return (
      <div className="logement__text-infos__host-info__ratings">{svgs}</div>
    );
  };
  if (logementData) {
    return (
      <>
        <MainHeader />
        <Carrousel pictures={logementData.pictures} />
        <div className="logement">
          <div className="logement__text-infos">
            <div className="logement__text-infos__logement-info">
              <p className="logement__text-infos__logement-info__description">
                {logementData.title}
              </p>
              <p className="logement__text-infos__logement-info__location">
                {logementData.location}
              </p>
              <div className="tag-container">
                <GenerateTags />
              </div>
            </div>
            <div className="logement__text-infos__host-info">
              <div className="logement__text-infos__host-infos__perso-info">
                <p className="logement__text-infos__host-info__perso-info__name">
                  {logementData.host.name}
                </p>
                <div className="logement__text-infos__host-info__perso-info__img-container">
                  <img
                    src={logementData.host.picture}
                    alt=""
                    className="logement__text-infos__host-info__perso-info__img"
                  />
                </div>
              </div>
              <GenerateRatings />
            </div>
          </div>
        </div>
        <div className="dropdowns-container">
          <div className="dropdown-container">
            <Dropdown
              title="Description"
              changeSizeContentDesktop={true}
              changeSizeContentMobile={false}
              content={logementData.description}
            />
          </div>

          <div className="dropdown-container">
            <Dropdown
              title="Équipements"
              changeSizeContentDesktop={true}
              changeSizeContentMobile={false}
              content={logementData.equipments}
            />
          </div>
        </div>
        <MainFooter />
      </>
    );
  } else {
    return <></>;
  }
}
