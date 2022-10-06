import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  // const [scrolled, setScrolled] = useState(false);
  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 150) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  // });

  // if (scrolled) {
  //   document.querySelector('header').classList.add('scrolled');
  // }
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 5) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["header"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <header
      className={`${scrolled ? "scrolled" : ""} header container  m-0 px-0`}
    >
      <div className="container px-0">
        <Navbar expand="lg">
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                alt=""
                className="logo img-fluid"
                onClick={() => scroll.scrollToTop()}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ml-auto justify-content-center align-items-center">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-300}
                duration={1000}
              >
                Home
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={100}
                duration={1000}
              >
                About
              </Link>
              {/* <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={33}
                duration={1000}
              >
                Project
              </Link>
              <Link
                activeClass="active"
                to="blog"
                spy={true}
                smooth={true}
                offset={-30}
                duration={1000}
              >
                Blog
              </Link> */}
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-30}
                duration={1000}
              >
                Contact
              </Link>
              <a
                href="https://drive.google.com/uc?export=download&id=189wkdj1P2HJkyq50uZpvTcOyPj8rZiKd"
                target="blank"
                className="resume"
              >
                resume
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
