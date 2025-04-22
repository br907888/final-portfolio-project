import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Section } from "../styles/SharedStyles";
import keysImage from "../assets/images/keys.jpg";

const HomeSection = styled(Section)`
  padding: 0;
  height: 80vh;
`;

const HeroContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${keysImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  height: 110%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const Name = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Divider = styled.div`
  width: 50px;
  height: 3px;
  background-color: #289c86;
  margin: 1.5rem auto;
`;

const Tagline = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  font-style: italic;
`;

function Home() {
  return (
    <HomeSection>
      <HeroContainer>
        <Name
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Brock Adams
        </Name>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Developer. Designer. Artist.
        </Title>
        <Divider />
        <Tagline
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Producing powerful digital worlds to connect and inspire.
        </Tagline>
      </HeroContainer>
    </HomeSection>
  );
}

export default Home;
