import React from "react";

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
      <SectionContainer title="Todos nuestros cursos">
          <GridLayout>
          <Card title="Curso de JavaScript" price="$0 mxn" img={jsLogo} />
          <Card title="Curso de HTML 5" price="$0 mxn" img={htmlLogo} />
          <Card title="Curso de CSS 3" price="$0 mxn" img={css3Logo} />
          <Card title="Curso de React JS" price="$149 mxn" img={reactLogo} />
          <Card title="Curso de Node JS" price="$149 mxn" img={nodeLogo} />
          <Card title="Curso de Mongo DB" price="$149 mxn" img={mongoLogo} />
          </GridLayout>
      </SectionContainer>
  )
};
