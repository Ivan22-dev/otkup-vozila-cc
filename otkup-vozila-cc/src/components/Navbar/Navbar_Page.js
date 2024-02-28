import React, { useState } from "react";
import { Navbar, Nav, NavbarBrand, NavbarToggler, NavItem, NavLink, Container, Collapse } from "reactstrap";

import ScrollspyNav from "./scrollSpy";

// Import Images
import logolight from "../../assets/images/logo-light.png";
import logodark from "../../assets/images/logo-dark.png";

const NavbarPage = (props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  // Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
  const targetId = props.navItems.map((item) => {
    return item.idnm;
  });

  return (
    <React.Fragment>
      <Navbar expand="lg" fixed="top" className={"navbar-custom sticky sticky-dark " + props.navClass}>
        <Container>
          {/* <NavbarBrand className="logo text-uppercase" href="/">
                        {
                            props.imglight === true ?
                                <img src={logolight} alt="" className="logo-light" height="22" />
                                : <img src={logodark} alt="" className="logo-dark" height="22" />
                        }
                    </NavbarBrand> */}
          <NavbarToggler onClick={toggle}>
            <i className="mdi mdi-menu"></i>
          </NavbarToggler>

          <Collapse id="navbarCollapse" isOpen={isOpenMenu} navbar>
            <ScrollspyNav
              scrollTargetIds={targetId}
              scrollDuration="800"
              headerBackground="true"
              activeNavClass="active"
              className="navbar-collapse"
            >
              <Nav navbar className="ml-auto navbar-right" id="mySidenav">
                {props.navItems.map((item, key) => (
                  <NavItem key={key}>
                    <NavLink href={"#" + item.idnm} className={item.navheading === "Home" ? "active" : ""}>
                      {" "}
                      {item.navheading}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            </ScrollspyNav>
          </Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default NavbarPage;
