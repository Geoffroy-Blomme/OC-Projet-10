import React from "react";
import "./Dropdown.css";

export default function Dropdown(props) {
  const { content, title, changeSizeContentMobile, changeSizeContentDesktop } =
    props;
  const marginDropdown = 20;

  const GenerateContent = () => {
    let contentDOM = "";
    if (Array.isArray(content)) {
      contentDOM = (
        <div className="dropdown__content__text">
          <ul className="dropdown__content__list">
            {content.map((elt, index) => {
              return (
                <li key={index} className="dropdown__content__list__elt">
                  {elt}
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      contentDOM = <div className="dropdown__content__text">{content}</div>;
    }
    return contentDOM;
  };

  function changeMarginDropdown(dropdownElt) {
    const contentElt = dropdownElt.querySelector(".dropdown__content");
    const contentEltHeight = contentElt.offsetHeight;
    if (dropdownElt.style.marginBottom === `${marginDropdown}px`) {
      dropdownElt.style.marginBottom = contentEltHeight + marginDropdown + "px";
    } else {
      dropdownElt.style.marginBottom = `${marginDropdown}px`;
    }
  }

  function dropdownArrowToggle(dropdownElt) {
    const arrowElt = dropdownElt.querySelector("svg");
    if (arrowElt.style.transform === "") {
      arrowElt.style.transform = "rotate(180deg)";
    } else {
      arrowElt.style.transform = "";
    }
  }

  function handleSizeTextContent(currentContent) {
    const allContent = document.querySelectorAll(".dropdown__content__text");
    const currentContentText = currentContent.querySelector(
      ".dropdown__content__text"
    );
    const currentContentHeight = currentContentText.clientHeight;
    let biggestHeight = currentContentHeight;
    // On loupe une premiere fois pour recuperer la taille de la plus grande.
    allContent.forEach((content) => {
      if (content.clientHeight > biggestHeight) {
        biggestHeight = content.clientHeight;
      }
    });
    // on reboucle pour donner la taille de la plus grande a toutes.
    allContent.forEach((content) => {
      const compStyles = window.getComputedStyle(content);
      content.style.height =
        biggestHeight -
        parseFloat(compStyles.paddingTop) -
        parseFloat(compStyles.paddingBottom) +
        "px";
    });
  }

  function dropdownHeaderHandler(e) {
    const content =
      e.currentTarget.parentElement.querySelector(".dropdown__content");
    content.style.visibility =
      content.style.visibility === "hidden" ? "initial" : "hidden";
    if (changeSizeContentMobile && window.screen.width <= 769) {
      handleSizeTextContent(content);
    } else {
      if (changeSizeContentDesktop && window.screen.width >= 768) {
        handleSizeTextContent(content);
      }
    }
    changeMarginDropdown(e.currentTarget.parentElement);
    dropdownArrowToggle(e.currentTarget.parentElement);
  }

  const tmp = () => {
    const dropDowns = Array.from(
      document.querySelectorAll(".dropdown__header")
    );
    console.log(dropDowns);
    dropDowns.map((dropDown) => {
      console.log(dropDown);
      dropdownHeaderHandler(dropDown);
    });
  };
  window.addEventListener("resize", tmp);

  return (
    <div className="dropdown" style={{ marginBottom: `${marginDropdown}px` }}>
      <div
        className="dropdown__header"
        onClick={(e) => {
          dropdownHeaderHandler(e);
        }}
      >
        {}
        <p className="dropdown__header__title">{title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
        >
          <path
            d="M10.7897 0.502064C11.4591 -0.167355 12.5462 -0.167355 13.2157 0.502064L23.4979 10.7843C24.1674 11.4538 24.1674 12.5409 23.4979 13.2103C22.8285 13.8797 21.7414 13.8797 21.072 13.2103L12 4.13835L2.92804 13.205C2.25862 13.8744 1.17148 13.8744 0.502064 13.205C-0.167355 12.5355 -0.167355 11.4484 0.502064 10.779L10.7843 0.496709L10.7897 0.502064Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="dropdown__content" style={{ visibility: "hidden" }}>
        <GenerateContent />
      </div>
    </div>
  );
}
