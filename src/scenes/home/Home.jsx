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

export const Home = () => {
  return (
    <>
      <Hero />
      <Description />
      <SectionContainer title="Comienza a aprender gratis con estos cursos">
        <GridLayout>
          <Link to="/">
            <Card title="Curso de JavaScript" price="$0 mxn" img={jsLogo} />
          </Link>
          <Link to="/">
            <Card title="Curso de HTML 5" price="$0 mxn" img={htmlLogo} />
          </Link>
          <Link to="/">
            <Card title="Curso de CSS 3" price="$0 mxn" img={css3Logo} />
          </Link>
        </GridLayout>
      </SectionContainer>
    </>
  );
};
