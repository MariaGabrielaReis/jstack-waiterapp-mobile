import { FlatList, Modal } from "react-native";
import { Product } from "../../types/Product";
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../Button";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import {
  CloseButton,
  Footer,
  FooterContent,
  Ingredient,
  IngredientsContainer,
  ModalBody,
  Price,
  ProductHeader,
  ProductImage,
} from "./styles";

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: Product | null;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({
  visible,
  onClose,
  product,
  onAddToCart,
}: ProductModalProps) {
  if (!product) return null;

  function handleAddToCart() {
    onAddToCart(product!);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <ProductImage
        source={{
          uri: `http://192.168.15.66:3333/uploads/${product.imagePath}`,
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </ProductImage>

      <ModalBody>
        <ProductHeader>
          <Text size={24} weight="600">
            {product.name}
          </Text>
          <Text color="#666" style={{ marginTop: 8 }}>
            {product.description}
          </Text>
        </ProductHeader>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text color="#666" weight="600">
              Ingredientes
            </Text>

            <FlatList
              data={product.ingredients}
              keyExtractor={(ingredient) => ingredient._id}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 16 }}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color="#666" style={{ marginLeft: 16 }}>
                    {ingredient.name}
                  </Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>

      <Footer>
        <FooterContent>
          <Price>
            <Text color="#666">Preço</Text>
            <Text size={20} weight="600">
              {formatCurrency(product.price)}
            </Text>
          </Price>
          <Button onPress={handleAddToCart}>Adicionar ao pedido</Button>
        </FooterContent>
      </Footer>
    </Modal>
  );
}
