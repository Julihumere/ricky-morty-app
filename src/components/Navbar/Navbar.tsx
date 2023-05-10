import { useEffect, useState } from "react";
import Logo from "../../assets/rickymortylogo.png";
import { Container, Search, Image } from "./NavBarStyled";

type Props = {
  filter: string;
  dispatch: React.Dispatch<any>;
  searchCharacters: (page: number, data: string) => void;
  pageSearch: number;
  setElement: any;
};

export const Navbar = ({
  searchCharacters,
  pageSearch,
  setElement,
  filter,
}: Props) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setElement("Search");
    searchCharacters(pageSearch, search);
  }, [search, pageSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      <Image src={Logo} alt="" />
      <Search placeholder={`Search ${filter}`} onChange={handleChange} />
    </Container>
  );
};
