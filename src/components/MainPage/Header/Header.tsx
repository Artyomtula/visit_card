import type { FC } from "react";
import cl from "./Header.module.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div>
      <Navbar expand="lg" className="mt-3">
        <Container>
          <Navbar.Brand href="#home" className={cl.cstBrand}>
            ARTYOMTULA
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={cl.cstToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about-me" className={cl.cstLink}>
                Обо мне
              </Nav.Link>
              <Nav.Link href="#achivments" className={cl.cstLink}>
                Достижения
              </Nav.Link>
              <Nav.Link href="#why-i" className={cl.cstLink}>
                Почему я?
              </Nav.Link>
              <Nav.Link href="#super-skills" className={cl.cstLink}>
                Супер-силы
              </Nav.Link>
              <Nav.Link href="#contacts" className={cl.cstLink}>
                Контакты
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
