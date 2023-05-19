import React from "react";
import MainHeader from "../components/Main_Header";
import Dropdown from "../components/Dropdown";
import MainFooter from "../components/Main_footer";
import background from "../assets/a-propos-background.png";
import styles from "./A_propos.module.css";

export default function APropos() {
  return (
    <>
      <MainHeader />
      <div className={styles.backgroundContainer}>
        <img src={background} alt="" className={styles.background} />
      </div>
      <div className={styles.dropdownsContainer}>
        <Dropdown
          title="Fiabilité"
          changeSizeContentMobile={true}
          changeSizeContentDesktop={false}
          content={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          }
        />
        <Dropdown
          title="Respect"
          changeSizeContentMobile={true}
          changeSizeContentDesktop={false}
          content={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
        <Dropdown
          title="Service"
          changeSizeContentMobile={true}
          changeSizeContentDesktop={false}
          content={
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          }
        />
        <Dropdown
          title="Sécurité"
          changeSizeContentMobile={true}
          changeSizeContentDesktop={false}
          content={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
        />
      </div>
      <MainFooter />
    </>
  );
}
