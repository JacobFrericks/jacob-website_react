import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const NavbarScroller = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Jacob Frericks</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/aboutme/">About Me</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/portfolio/">Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/experience/">Experience</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contactme/">Contact Me</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarScroller;