import styled from "styled-components";

export const Section = styled.section`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin: 2rem 0;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background-color: #289c86;
    margin: 0.5rem auto;
  }
`;
