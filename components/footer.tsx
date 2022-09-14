import React from "react";
import { Container, Row, Col } from "@nextui-org/react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const footer = () => {
  return (
    <Container css={{ mt: "$20", mb: "$10" }}>
      <Row justify="center">Cinecus CC • © 2022 • CC Store</Row>
      <Row justify="center" css={{ mt: "$3", gap: "$5" }}>
        <a href="https://github.com/cinecus" target="_blank">
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/chananon-chantaratin-7b0825196"
          target="_blank"
        >
          <FaLinkedin size={24} />
        </a>
      </Row>
    </Container>
  );
};

export default footer;
