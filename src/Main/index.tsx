import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContent,
} from "./styles";

export function Main() {
  return (
    <>
      <Container>
        <Header />
        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>
      <Footer>
        <FooterContent>
          <Button onPress={() => alert("oo")}>Novo Pedido</Button>
        </FooterContent>
      </Footer>
    </>
  );
}