import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const NavbarPrin = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <NavbarBrand href="/">
                Bienvenido
                </NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                <Nav
                    className="ms-auto"
                    navbar
                >
                    {/* <NavItem>
                    <NavLink href="/components/">
                        Components
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                        GitHub
                    </NavLink>
                    </NavItem> */}
                    <UncontrolledDropdown
                    inNavbar
                    nav
                    >
                    <DropdownToggle
                        caret
                        nav
                    >
                        Osward José
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                        Mi Perfil
                        </DropdownItem>
                        <DropdownItem>
                        Ajustes
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Cerrar Sesión
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                {/* <NavbarText>
                    Simple Text
                </NavbarText> */}
                </Collapse>
            </Navbar>
            </div>
    )
}

export default NavbarPrin