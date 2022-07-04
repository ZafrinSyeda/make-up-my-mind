import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavConatiner = styled.nav`
	width: 100%;
	height: ${(props) => (props.openHamburger ? "100vh" : "80px")};
	background-color: ${(props) => (props.openHamburger ? "#d8d7ff" : "")};
	display: flex;
	flex-direction: column;
	position: fixed;

	@media screen and (min-width: 700px) {
		height: 80px;
		background-color: transparent;
	}
`;

export const LogoContainer = styled.div`
	flex: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
`;
export const LinkContainer = styled.div`
	flex: 90%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 700px) {
		justify-content: right;
	}
`;

export const InnerNav = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
`;

export const NavbarLinks = styled.div`
	display: flex;
`;

export const Logo = styled(Link)`
	color: black;
	text-decoration: none;
`;

export const NavbarLink = styled(Link)`
	color: #7b7a93;
	font-size: large;
	text-decoration: none;
	margin: 10px;
	margin-right: 50px;

	:hover {
		text-decoration: underline;
	}

	@media screen and (max-width: 700px) {
		display: none;
	}
`;

export const ResponsiveNav = styled.div`
	display: flex;
	flex-direction: column;
	padding: 30px;

	@media screen and (min-width: 700px) {
		display: none;
	}
`;

export const ResponsiveNavBtn = styled.button`
	size: 100px;
	color: black;
	background: none;
	border: none;
	margin-right: 30px;

	@media screen and (min-width: 700px) {
		display: none;
	}
`;

export const ResponsiveNavLink = styled(Link)`
	color: black;
	font-weight: 500;
	font-size: 40px;
	text-decoration: none;
	margin: 10px;

	:hover {
		text-decoration: underline #fff;
	}

	@media screen and (mix-width: 700px) {
		display: none;
	}
`;
