import React from "react";
import { Link } from "react-router-dom";

//components
import { SectionContainer } from "../../components/sectionsContainer/Container";
import { GridLayout } from "../../components/gridLayout/GridLayout";
import { Card } from "../../components/card/Card";

//img
import jsLogo from "../../img/JSLOGO.png";
import htmlLogo from "../../img/HTMLLOGO.png";
import css3Logo from "../../img/CSSLOGO.png";
import reactLogo from "../../img/REACTLOGO.png";
import nodeLogo from "../../img/NODELOGO.png";
import mongoLogo from "../../img/MONGOLOGO.png";

export const Shop = () => {
  return (
    <SectionContainer title="Cursos disponibles">
      <GridLayout>
        <Link to="/">
          <Card title="Curso de JavaScript" price="$0 mxn" image={jsLogo} />
        </Link>
        <Link to="/">
          <Card title="Curso de HTML 5" price="$0 mxn" image={htmlLogo} />
        </Link>
        <Link to="/">
          <Card title="Curso de CSS 3" price="$0 mxn" image={css3Logo} />
        </Link>
        <Link to="/">
          <Card title="Curso de React JS" price="$149 mxn" image={reactLogo} />
        </Link>
        <Link to="/">
          <Card title="Curso de Node JS" price="$149 mxn" image={nodeLogo} />
        </Link>
        <Link to="/">
          <Card title="Curso de Mongo DB" price="$149 mxn" image={mongoLogo} />
        </Link>
      </GridLayout>
    </SectionContainer>
  );
};
