import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
  body {
    background-color: #cffaf2;
    color: #333;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavBar = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Header>
          <Logo to="/">Brock Adams</Logo>
          <NavBar>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/projects">Projects</NavItem>
          </NavBar>
        </Header>
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <>
                  <About />
                  <Skills />
                </>
              }
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
