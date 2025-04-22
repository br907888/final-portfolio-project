import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Section, SectionTitle } from "../styles/SharedStyles";
import quizImage from "../assets/images/quizsite.jpg";
import takeoutImage from "../assets/images/takeoutapp.jpg";
import cometTalesImage from "../assets/images/comettales.jpg";

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.div`
  height: 200px;
  background-color: #ddd;
  background-size: cover;
  background-position: center;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  margin-bottom: 1rem;
  color: #666;
`;

const ProjectLink = styled.a`
  display: inline-block;
  background-color: #289c86;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4dc4ae;
  }
`;

function Projects() {
  const projects = [
    {
      title: "TakeOut App Prototype",
      description:
        "A high-fidelity Figma prototype designed to help low-income college students find affordable meals.",
      image: takeoutImage,
      alt: "Takeout App Image",
      link: "https://www.figma.com/proto/JjoCX7yVq1b5klKI1ZuaLZ/Takeout?node-id=0-1&t=Ki52RPu9IwuIYLlC-1",
    },
    {
      title: "Comet Tales App Prototype",
      description:
        "A high-fidelity educational Figma prototpye designed to teach users about the Solar System and astronomical history. Completed as a group project where I served as Project Manager, Designer, and Developer.",
      image: cometTalesImage,
      alt: "Comet Tales App Image",
      link: "https://www.figma.com/proto/gsPqmIZWVUKxvTAiO5MpNq/high-fid-prototype?page-id=0%3A1&node-id=101-904&p=f&viewport=449%2C336%2C0.09&t=5JRMVsuHCvZfDFGA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=105%3A1048",
    },
    {
      title: "Interactive Character Quiz",
      description:
        "A website produced using JavaScript and HTML that takes the user's answers from an interactive quiz and generates a character that corresponds with the answers.",
      image: quizImage,
      alt: "Quiz Website Image",
      link: "https://students.gaim.ucf.edu/~br907888/dig3716c/assignment2/survey.html",
    },
  ];

  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProjectImage
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink href={project.link}>View Project</ProjectLink>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Section>
  );
}

export default Projects;
