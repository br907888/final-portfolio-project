import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Section, SectionTitle } from "../styles/SharedStyles";
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaPaintBrush,
  FaPencilAlt,
  FaCamera,
} from "react-icons/fa";

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 120px;
`;

const IconContainer = styled.div`
  font-size: 2.5rem;
  color: #289c86;
  margin-bottom: 1rem;
`;

const SkillName = styled.p`
  font-weight: 500;
`;

function Skills() {
  const skills = [
    { name: "React/React Native", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML/CSS", icon: <FaHtml5 /> },
    { name: "Adobe Photoshop", icon: <FaCamera /> },
    { name: "Graphic Design", icon: <FaPencilAlt /> },
    { name: "UI Design", icon: <FaPaintBrush /> },
  ];

  return (
    <Section id="skills">
      <SectionTitle>My Skills</SectionTitle>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <IconContainer>{skill.icon}</IconContainer>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsContainer>
    </Section>
  );
}

export default Skills;
