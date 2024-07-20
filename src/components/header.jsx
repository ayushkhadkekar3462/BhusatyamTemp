import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import cfalogo from "../assets/cfalogo.png";
import styles from "../../src/styles/componentstyles/header.module.css";
import '../index.css';

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576); 
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.header}>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} >
          <Container fluid>
            <div className="flex">
              <Link to="/" className="font-bold text-2xl text-gray-500">
                <h1>Bhusatyam Technology</h1>
              </Link>
              {!isMobile && (
                <>
                  <Link className={`nav-link pt-2 ml-10 ${styles.clicklinks}`} to="#">Buy land</Link>
                  <Link className={`nav-link pt-2 mr-4 ml-4 ${styles.clicklinks}`} to="#">Find agent</Link>
                </>
              )}
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{ backgroundColor: '#8292a7' }} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ color: 'white', backgroundColor: '#e1e8e6' }}
            >
              <Offcanvas.Header closeButton style={{ backgroundColor: 'rgb(63 72 83)' }}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{ color: 'white', fontFamily: '"Poppins", sans-serif' }}>
                  Bhusatyam Technology
                  <hr />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className={`justify-content-end flex-grow-1 pe-3 ${styles.headerText}`}>
                {isMobile && (
                <>
                  <Link className={`nav-link  ${styles.clicklinks}`} to="#">Buy land</Link>
                  <Link className={`nav-link  ${styles.clicklinks}`} to="#">Find agent</Link>
                </>
              )}
                  <Link className={`nav-link  ${styles.clicklinks}`} to="#">Post property</Link>
                  <Link className={`nav-link ${styles.clicklinks}`} to="#">Log in</Link>
                  <Link className={`nav-link ${styles.clicklinks}`} to="#">Sign up</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;
