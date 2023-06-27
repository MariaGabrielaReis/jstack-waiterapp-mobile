import { useState } from "react";
import { FlatList } from "react-native";
import { products } from "../../mocks/products";
import { Product } from "../../types/Product";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
import { Text } from "../Text";
import {
  AddToCartButton,
  ProductContainer,
  ProductDetails,
  ProductImage,
  Separator,
} from "./styles";

interface MenuProps {
  onAddToCart: (product: Product) => void;
}

export function Menu({ onAddToCart }: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function handleOpenModal(product: Product) {
    setSelectedProduct(product);
    setIsModalVisible(true);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />

      <FlatList
        data={products}
        keyExtractor={(product) => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => {
          return (
            <ProductContainer onPress={() => handleOpenModal(product)}>
              <ProductImage
                source={{
                  uri: `http://192.168.15.66:3333/uploads/${product.imagePath}`,
                }}
              />
              <ProductDetails>
                <Text weight="600">{product.name}</Text>
                <Text size={14} color={"#66666"} style={{ marginVertical: 8 }}>
                  {product.description}
                </Text>
                <Text size={14} weight="600">
                  {formatCurrency(product.price)}
                </Text>
              </ProductDetails>

              <AddToCartButton onPress={() => onAddToCart(product)}>
                <PlusCircle />
              </AddToCartButton>
            </ProductContainer>
          );
        }}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
      />
    </>
  );
}
