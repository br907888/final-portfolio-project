import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 1.5rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #5fbcd3;
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink
          href="https://github.com/br907888"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </SocialLink>
      </SocialLinks>
      <Copyright>
        &copy; {currentYear} Brock Adams. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
