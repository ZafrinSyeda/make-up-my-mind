import React, { useState } from "react";
import {
	NavConatiner,
	LogoContainer,
	LinkContainer,
	InnerNav,
	NavbarLinks,
	NavbarLink,
	Logo,
	ResponsiveNav,
	ResponsiveNavBtn,
	ResponsiveNavLink,
} from "../styles/NavbarStyle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
	const [openHamburger, setOpenHamburger] = useState(false);

	return (
		<NavConatiner openHamburger={openHamburger}>
			<InnerNav>
				<LogoContainer>
					{" "}
					<Logo to="/"> ▲ </Logo>{" "}
				</LogoContainer>
				<LinkContainer>
					<NavbarLinks>
						<NavbarLink to="/sort"> Sort a List </NavbarLink>
						<NavbarLink to="/random"> Random Selection </NavbarLink>
						<NavbarLink to="/pros-cons"> Pros and Cons </NavbarLink>
						<ResponsiveNavBtn onClick={() => setOpenHamburger(!openHamburger)}>
							{openHamburger ? (
								<CloseIcon style={{ fontSize: 30 }} />
							) : (
								<MenuIcon style={{ fontSize: 30 }} />
							)}
						</ResponsiveNavBtn>
					</NavbarLinks>
				</LinkContainer>
			</InnerNav>
			{openHamburger && (
				<ResponsiveNav>
					<ResponsiveNavLink to="/sort"> Sort a List </ResponsiveNavLink>
					<ResponsiveNavLink to="/random"> Random Selection </ResponsiveNavLink>
					<ResponsiveNavLink to="/pros-cons"> Pros and Cons </ResponsiveNavLink>
				</ResponsiveNav>
			)}
		</NavConatiner>
	);
}

export default Navbar;
