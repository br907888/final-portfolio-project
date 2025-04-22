import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Section, SectionTitle } from "../styles/SharedStyles";
import profilePic from "../assets/images/profile.jpg";

const AboutText = styled(motion.p)`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ProfileImage = styled(motion.img)`
  width: 200px;
  height: auto;
  margin: 1rem auto 0 auto;
  display: block;
  border-radius: 8px;
`;

function About() {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <AboutText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        I am an impassioned and driven designer based out of Orlando, Florida.
        Using my expertise in both graphic and web design, I have been
        developing unique web and mobile experiences for over three years.
      </AboutText>
      <AboutText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I am proficient in JavaScript, React, React Native, Adobe Photoshop,
        Adobe Premiere Pro, and Adobe Illustrator. My skillset ensures that the
        digital experiences I develop are intuitive, engaging, and visually
        appealing to all.
      </AboutText>
      <AboutText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        When I'm not developing, I enjoy drawing, watching classic movies,
        running, and learning too much about Star Wars lore!
      </AboutText>

      <ProfileImage
        src={profilePic}
        alt="Brock Adams profile image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
    </Section>
  );
}

export default About;
