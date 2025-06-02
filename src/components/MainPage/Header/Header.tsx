import type { FC } from "react";
import { motion } from "framer-motion";
import cl from "./Header.module.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const navVariants = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };
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
            <motion.div
              className="ms-auto"
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              <Nav>
                <motion.div variants={linkVariants}>
                  <Nav.Link href="#about-me" className={cl.cstLink}>
                    Обо мне
                  </Nav.Link>
                </motion.div>
                <motion.div variants={linkVariants}>
                  <Nav.Link href="#achivments" className={cl.cstLink}>
                    Достижения
                  </Nav.Link>
                </motion.div>
                <motion.div variants={linkVariants}>
                  <Nav.Link href="#why-i" className={cl.cstLink}>
                    Почему я?
                  </Nav.Link>
                </motion.div>
                <motion.div variants={linkVariants}>
                  <Nav.Link href="#super-skills" className={cl.cstLink}>
                    Супер-силы
                  </Nav.Link>
                </motion.div>
                <motion.div variants={linkVariants}>
                  <Nav.Link href="#contacts" className={cl.cstLink}>
                    Контакты
                  </Nav.Link>
                </motion.div>
              </Nav>
            </motion.div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
