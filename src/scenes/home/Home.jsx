import React from "react";
import { Link } from "react-router-dom";
//components
import { Hero } from "../../components/hero/Hero";
import { Description } from "../../components/description/Description";
import { GridLayout } from "../../components/gridLayout/GridLayout";
import { SectionContainer } from "../../components/sectionsContainer/Container";
import { Card } from "../../components/card/Card";
//img
import jsLogo from "../../img/JSLOGO.png";
import htmlLogo from "../../img/HTMLLOGO.png";
import css3Logo from "../../img/CSSLOGO.png";
//context
import { CardContext } from "../../context/CardContext";

export const Home = () => {
  const cards = { price: "$0mxn", }
  return (
    <>
      <Hero />
      <Description />
      <SectionContainer title="Comienza a aprender gratis con estos cursos">
        <GridLayout>
          <CardContext.Provider value={cards}>
            <Link to="/">
              <Card title="Curso de JavaScript" image={jsLogo} />
            </Link>
            <Link to="/">
              <Card title="Curso de HTML 5" image={htmlLogo}  />
            </Link>
            <Link to="/">
              <Card title="Curso de CSS 3" image={css3Logo}  />
            </Link>
          </CardContext.Provider>
        </GridLayout>
      </SectionContainer>
    </>
  );
};
