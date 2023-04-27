import Logo from "../../assets/rickymortylogo.png";
import { Container, Search, Image } from "./NavBarStyled";

type Props = {};

export const Navbar = (props: Props) => {
  return (
    <Container>
      <Image src={Logo} alt="" />
      <Search placeholder="Search characters, locations y episodes..." />
    </Container>
  );
};
